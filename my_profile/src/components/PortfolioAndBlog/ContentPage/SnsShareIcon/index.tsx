"use client";

import React from "react";
import { FaXTwitter, FaFacebookF, FaLine, FaLinkedinIn } from "react-icons/fa6";
import { SiHatenabookmark } from "react-icons/si";

type Props = {
  url: string;
  title: string;
};

export const SnsShareIcons = ({ url, title }: Props) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex gap-4 items-center mt-6">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="bg-[#3b5998] rounded-full p-3 shadow hover:opacity-80 text-[10px]"
      >
        <FaXTwitter size={18} />
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="bg-[#3b5998] text-white rounded-full p-2 shadow hover:opacity-80"
      >
        <FaFacebookF size={24} />
      </a>

      <a
        href={`https://social-plugins.line.me/lineit/share?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LINE"
        className="bg-[#06C755] text-white rounded-full p-2 shadow hover:opacity-80"
      >
        <FaLine size={24} />
      </a>

      <a
        href={`https://b.hatena.ne.jp/entry/panel/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Hatena Bookmark"
        className="bg-[#00A4DE] text-white rounded-full p-2 shadow hover:opacity-80"
      >
        <SiHatenabookmark size={24} />
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="bg-[#0077b5] text-white rounded-full p-2 shadow hover:opacity-80"
      >
        <FaLinkedinIn size={24} />
      </a>
    </div>
  );
};
