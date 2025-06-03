import React from "react";
import Sidebar from "@/components/PortfolioAndBlog/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-48 w-full p-8">{children}</main>
    </div>
  );
}
