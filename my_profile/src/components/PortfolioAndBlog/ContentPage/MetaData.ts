import type { Metadata } from "next";
import { URL } from "@/constants/url";
import type { MetaContentData } from "@/types/meta";

type GenerateMetadataArgs = {
  params: { slug: string };
  getContentBySlug: (slug: string) => Promise<MetaContentData | null>;
  pathPrefix: string;
  siteName: string;
};

export async function generateMetadataByContent({
  params,
  getContentBySlug,
  pathPrefix,
  siteName,
}: GenerateMetadataArgs): Promise<Metadata> {
  const content = await getContentBySlug(params.slug);

  if (!content) return {};

  const pageUrl = `${URL.appRoot}${pathPrefix}/${content.articleSlug}`;
  const imageUrl = content.thumbnail.url;
  const title = content.title;
  const description = content.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName,
      images: [
        {
          url: imageUrl,
          width: content.thumbnail.width,
          height: content.thumbnail.height,
          alt: "OGP Image",
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
