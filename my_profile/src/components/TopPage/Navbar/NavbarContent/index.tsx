"use client";

import React from "react";
import { itemStyle } from "./style.css";

type Props = {
  href: string;
  name: string;
  onClick: () => void;
  submenuHrefAll?: string;
};

export const NavbarContent: React.FC<Props> = ({
  href,
  name,
  onClick,
  submenuHrefAll,
}) => {
  return (
    <>
      {submenuHrefAll ? (
        <>
          <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]  [--is-collapse:true] sm:[--is-collapse:false] ">
            <button
              id="hs-mega-menu"
              type="button"
              className="hs-dropdown-toggle sm:p-2 flex items-center"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Mega Menu"
            >
              <div className={itemStyle}>{name}</div>
              <svg
                className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-auto sm:ms-2 shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className="hs-dropdown-menu sm:transition-[opacity,margin] sm:ease-in-out sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10  top-full start-0 min-w-60 bg-white sm:shadow-md rounded-lg py-2 sm:px-2 dark:bg-transparent sm:dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-mega-menu"
            >
              <div className="sm:grid sm:grid-cols-3">
                <div className="flex flex-col">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                    href={href}
                    onClick={onClick}
                  >
                    New
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                    href={submenuHrefAll}
                    onClick={onClick}
                  >
                    All
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <a className={itemStyle} href={href} onClick={onClick}>
          {name}
        </a>
      )}
    </>
  );
};
