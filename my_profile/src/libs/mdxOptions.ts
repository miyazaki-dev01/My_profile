import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import type { MDXRemoteOptions } from "next-mdx-remote-client/rsc";

export const mdxOptions: MDXRemoteOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeCodeTitles, [rehypePrism, { showLineNumbers: true }]],
    format: "mdx",
  },
  parseFrontmatter: true,
};
