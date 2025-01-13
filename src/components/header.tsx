'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  
  return (
    <header className={`flex justify-between items-center fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
    }`}>
      <Link href="/" passHref>
        <div className="flex items-center cursor-pointer">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <h1 className={`ml-2 text-4xl font-bold p-3 ${
          isScrolled ? "text-green-786" : "text-white bg-green-786 bg-opacity-75"
          }`}>jugnuu</h1>
        </div>
      </Link>
      <nav>
        <ul className="flex space-x-8 text-xl font-bold">
        <li><a href="/watch" className="hover:text-green-786">Watch</a></li>
        <li><a href="/donate" className="hover:text-green-786">Donate</a></li>
        <li><a href="/impact" className="hover:text-green-786">Impact</a></li>
        <li><a href="/about" className="hover:text-green-786 pr-8">About</a></li>
        </ul>
      </nav>
    </header>
  );
};
