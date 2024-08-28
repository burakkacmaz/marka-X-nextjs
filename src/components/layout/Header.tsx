"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="border-b-2 border-black p-3 pb-2 mb-0 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link className="text-primary font-semibold text-2xl" href="/">
                MARKA X
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link href="/" className="text-black hover:bg-black hover:text-white p-2 rounded-lg">
                Anasayfa
              </Link>
              <Link href="/" className="text-black hover:bg-black hover:text-white p-2 rounded-lg">
                Galeri
              </Link>
              <Link href="/" className="text-black hover:bg-black hover:text-white p-2 rounded-lg">
                Katalog
              </Link>
              <Link href="/" className="text-black hover:bg-black hover:text-white p-2 rounded-lg">
                Hakkımızda
              </Link>
              <Link href="/" className="text-black hover:bg-black hover:text-white p-2 rounded-lg">
                Giriş Yap / Üye Ol
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-black md:text-black hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-inset" onClick={toggleMenu}>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-2 space-y-1 sm:px-3 text-end border-b-2 border-black p-3">
            <Link href="/" className="text-black block hover:bg-black hover:text-white p-2 rounded-lg">
              Anasayfa
            </Link>
            <Link href="/" className="text-black block hover:bg-black hover:text-white p-2 rounded-lg">
              Galeri
            </Link>
            <Link href="/" className="text-black block hover:bg-black hover:text-white p-2 rounded-lg">
              Katalog
            </Link>
            <Link href="/" className="text-black block hover:bg-black hover:text-white p-2 rounded-lg">
              Hakkımızda
            </Link>
            <Link href="/" className="text-black block hover:bg-black hover:text-white p-2 rounded-lg">
              Giriş Yap
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
