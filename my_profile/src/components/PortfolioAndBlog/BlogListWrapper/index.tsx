"use client";

import React from "react";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";
import { BlogsProps } from "@/types/BlogCard";
import dayjs from "dayjs";
import Image from "next/image";

export default function BlogListWrapper({ blogs }: BlogsProps) {
  useScrollRestoration();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Blog</h1>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex items-center justify-between border-b py-2"
          >
            <div>
              <span className="text-xs border px-2 py-1 rounded-full">
                {blog.category}
              </span>
              <h2 className="font-bold">{blog.title}</h2>
              <p className="text-sm text-gray-500">
                {dayjs(blog.updatedAt).format("YY.MM.DD")}
              </p>
            </div>
            <Image
              className="w-20 h-14 bg-gray-300 rounded"
              src={blog.thumbnail.url}
              alt="Features Image"
              width={blog.thumbnail.width}
              height={blog.thumbnail.height}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
