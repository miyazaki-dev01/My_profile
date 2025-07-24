import React from "react";
import Image from "next/image";

type OgpImage = {
  url: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
};

type Props = {
  ogp: {
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: OgpImage | OgpImage[];
    ogUrl?: string;
  };
};

export function OgpCard({ ogp }: Props) {
  // ogImage を単一に正規化（最初の画像）
  const imageData = Array.isArray(ogp.ogImage) ? ogp.ogImage[0] : ogp.ogImage;

  // 値を抽出（string で来ることもあるので number に変換）
  const imageUrl = imageData?.url;
  const imageWidth = imageData?.width ? Number(imageData.width) : 96;
  const imageHeight = imageData?.height ? Number(imageData.height) : 96;
  const imageAlt = imageData?.alt ?? "OGP Image";

  const title = ogp.ogTitle || "No Title";
  const description = ogp.ogDescription || "No description available.";
  const link = ogp.ogUrl || "#";
  const domain = ogp.ogUrl ? new URL(ogp.ogUrl).hostname : "";

  return (
    <>
      {ogp && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block border rounded-xl p-4 shadow-md hover:shadow-lg transition"
        >
          <div className="flex gap-4 items-center">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                style={{
                  width: "96px",
                  height: "96px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  flexShrink: 0,
                }}
              />
            ) : (
              <Image
                src="/theme/no_image.png"
                width={800}
                height={500}
                alt="no-image"
              />
            )}
            <div className="flex-1">
              {domain && <p className="text-xs text-gray-500 mb-1">{domain}</p>}
              <p className="text-lg font-semibold line-clamp-1">{title}</p>
              <p className="text-sm text-gray-600 line-clamp-2">
                {description}
              </p>
            </div>
          </div>
        </a>
      )}
    </>
  );
}
