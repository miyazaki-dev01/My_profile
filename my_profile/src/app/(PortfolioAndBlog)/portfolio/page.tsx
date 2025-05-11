import React from "react";

export default function AllPortfolioPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Portfolio</h1>
      <div className="space-y-6">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div key={id}>
            <div className="bg-gray-300 h-40 rounded" />
            <h2 className="mt-2 font-bold">ポートフォリオタイトル</h2>
            <p>ああああああああああああああああああああああ</p>
          </div>
        ))}
      </div>
    </div>
  );
}
