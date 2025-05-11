"use client";

import React from "react";
import Link from "next/link";

const navItems = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-48 bg-[#f9f5ee] border-r border-gray-300 p-4 z-50">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="">
            {item.name}
          </Link>
        ))}
        <div className="mt-8 text-sm text-gray-600">
          Contact
          <div className="text-xs mt-2">© 2025 YourName profile</div>
        </div>
      </nav>
    </aside>
  );
}
