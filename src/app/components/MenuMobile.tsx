"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import { useState } from "react";

export default function MenuMobile() {
  const [transformStyle, setTransformStyle] = useState<Number>(100);

  const menuMobileController = () => {
    transformStyle === 100 ? setTransformStyle(0) : setTransformStyle(100)
  };

  return (
    <div>
      <div className="md:hidden flex justify-between items-center">
        <button className="order-2" onClick={menuMobileController}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <Link href={"/"} className="order-1">
          <Image alt="logo" src={logo} className="w-40" />
        </Link>
      </div>
      <nav
        className="fixed top-0 right-0 menu-mobile bg-stone-800 z-10 p-5 duration-300"
        style={{
          transform: `translateX(${transformStyle}%)`,
        }}
      >
        <button className="text-white" onClick={menuMobileController}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="w-full h-full flex flex-col items-center mt-10 gap-5 text-white text-2xl">
          <Link
            href={"/"}
            className="text-md font-bold hover:text-orange-600 duration-300"
          >
            Página Inicial
          </Link>
          <Link
            href={"/"}
            className="text-md font-bold hover:text-orange-600 duration-300"
          >
            Produtos
          </Link>
          <Link
            href={"/"}
            className="text-md font-bold hover:text-orange-600 duration-300"
          >
            Projetos
          </Link>
          <Link
            href={"/"}
            className="text-md font-bold hover:text-orange-600 duration-300"
          >
            Quem somos
          </Link>
          <Link
            href={"/contato"}
            className="border border-white hover:border-orange-600 hover:bg-orange-600 py-2 px-5 rounded-lg duration-200 mt-10"
          >
            Entrar em contato
          </Link>
        </div>
      </nav>
    </div>
  );
}
