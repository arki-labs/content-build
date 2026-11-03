import rehypePrettyCode from 'rehype-pretty-code';
// props to https://rehype-pretty-code.netlify.app/
const options = {
    theme: {
        dark: 'github-dark-dimmed',
        light: 'github-light',
    },
    grid: true,
    keepBackground: false,
    onVisitLine(node) {
        // Prevent lines from collapsing in `display: grid` mode, and
        // allow empty lines to be copy/pasted
        if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }];
        }
    },
};
export const prettyCode = [rehypePrettyCode, options];
