import React from "react";
import Image from "next/image";

type CustomImageProps = {
  idx: number;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
};

export const CustomImage = ({ idx, images }: CustomImageProps) => {
  const image = images[idx];

  if (!image) return null;

  return (
    <Image
      src={image ? image.url : "/theme/comming_soon.png"}
      height={image.height}
      width={image.width}
      alt={`画像${idx + 1}`}
      style={{ width: "100%", borderRadius: 8, margin: "1rem 0" }}
    />
  );
};
