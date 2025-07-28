import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import type { MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import { prettyCodeOptions } from "@/libs/prettyCodeOptions";

export const mdxOptions: MDXRemoteOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    format: "mdx",
  },
  parseFrontmatter: true,
};
