import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import type { MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import { prettyCodeOptions } from "@/libs/prettyCodeOptions";
import type { PluggableList } from "unified";

export const mdxOptions: MDXRemoteOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]] as PluggableList,
    format: "mdx",
  },
  parseFrontmatter: true,
};
