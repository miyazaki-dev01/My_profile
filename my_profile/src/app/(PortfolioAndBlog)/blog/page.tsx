import React from "react";

export default function AllBlogPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Blog</h1>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((id) => (
          <div
            key={id}
            className="flex items-center justify-between border-b py-2"
          >
            <div>
              <span className="text-xs border px-2 py-1 rounded-full">
                ブログ
              </span>
              <h2 className="font-bold">ブログタイトル</h2>
              <p className="text-sm text-gray-500">2025.03.15</p>
            </div>
            <div className="w-20 h-14 bg-gray-300 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
