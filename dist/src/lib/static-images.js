import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { visit } from 'unist-util-visit';
import createPlaceholder from './placeholder.js';
const fileChecksum = async (file) => {
    try {
        return checksum(await fs.readFile(file));
    }
    catch {
        return '';
    }
};
const checksum = (content) => {
    return crypto.createHash('sha256').update(content).digest('hex');
};
const findPath = (file, image) => {
    const data = file.data;
    const directory = data._meta.directory;
    if (directory && directory !== '.') {
        return path.join(directory, image.properties['src'] || '');
    }
    return image.properties['src'] || '';
};
const copy = async (source, sha256sum, target) => {
    if (sha256sum !== (await fileChecksum(target))) {
        const targetDir = path.dirname(target);
        await fs.mkdir(targetDir, { recursive: true });
        await fs.copyFile(source, target);
    }
};
const metadata = async (resourcePath, source, pathname) => {
    const content = await fs.readFile(source);
    const image = sharp(content);
    const { width, height } = await image.metadata();
    if (!width || !height) {
        return null;
    }
    const src = resourcePath + '/' + pathname;
    const sha256 = checksum(content);
    const blurDataURL = await createPlaceholder(image);
    return {
        sha256,
        props: {
            width,
            height,
            src,
            blurDataURL,
        },
    };
};
const processImage = async (options, file, node) => {
    const root = options.sourceRoot;
    const pathname = findPath(file, node);
    const source = path.join(root, pathname);
    const meta = await metadata(options.resourcePath, source, pathname);
    if (!meta) {
        return;
    }
    const target = path.join(options.publicDir, pathname);
    await copy(source, meta.sha256, target);
    node.properties = {
        ...node.properties,
        ...meta.props,
    };
};
const staticImages = options => (tree, file, done) => {
    const tasks = [];
    visit(tree, 'element', (node) => {
        if (node.tagName === 'img') {
            tasks.push(processImage(options, file, node));
        }
    });
    // A failed image must fail the compile, not leave `done` uncalled (the build would hang).
    Promise.all(tasks).then(() => done(), done);
};
export const staticCoverImage = async (sourceRoot, targetRoot, resourcePath, directory, image) => {
    if (image.includes('://')) {
        return image;
    }
    const source = path.join(sourceRoot, directory, image);
    const content = await fs.readFile(source);
    const sha256sum = checksum(content);
    const target = path.join(targetRoot, directory, image);
    await copy(source, sha256sum, target);
    return `${resourcePath}/${directory}/${image}`;
};
export default staticImages;
