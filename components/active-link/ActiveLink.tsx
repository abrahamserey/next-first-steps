"use client";

import Link from "next/link";
import React from "react";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();
  <Link href="/" className="text-blue-400 mr-2 transition-all">
    Inicio
  </Link>;
  return (
    <Link
      className={`${style.link} ${pathName === path && style["active-link"]} `}
      href={path}
    >
      {text}
    </Link>
  );
};
