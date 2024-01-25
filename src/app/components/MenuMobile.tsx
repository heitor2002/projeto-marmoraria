import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

export default function MenuMobile() {
  return (
    <div>
      <div className="md:hidden flex justify-between items-center">
        <button className="order-2">
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
      <nav className="fixed top-0 right-0 menu-mobile">

      </nav>
    </div>
  );
}
