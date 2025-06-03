import React from "react";
import { itemStyle } from "./style.css";

type Props = {
  href: string;
  name: string;
  onClick: () => void;
};

export const NavbarContent: React.FC<Props> = ({ href, name, onClick }) => {
  return (
    <a
      className={itemStyle}
      href={href}
      onClick={onClick}
    >
      {name}
    </a>
  );
};
