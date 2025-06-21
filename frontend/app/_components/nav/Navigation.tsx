"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavLink = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Rooms", href: "/rooms" },
  { name: "Contact Us", href: "/contact" },
  { name: "Our Gallery", href: "/gallery" },
];

const Navigation = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full h-auto sticky z-1000 top-0 left-0 bg-white shadow-md">
      <nav className="py-5 px-4 sm:px-6 lg:px-8 w-full flex flex-row items-center justify-between">
        <div className="w-auto flex items-center justify-between flex-1 lg:flex-none">
          <Image
            className=" h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] rounded-full"
            src="/hero.jpg"
            alt="hotel logo"
            height={50}
            width={50}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-9">
          {NavLink.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-amber-700 text-xl font-bold ${
                  isActive ? "text-amber-900 font-semibold" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Search */}
        {/* <div className=" w-[200px]  sm:w-[250px] md:w-[400px] h-auto flex flex-row justify-between">
          <form className="h-auto w-[190px] sm:w-[250px] md:w-[400px]">
            <input
              type="search"
              placeholder="search for room"
              className="w-full h-[40px] border-2 border-gray-700 rounded-3xl pl-5"
            />
          </form>
        </div> */}

          <button
            className="lg:hidden ml-auto text-gray-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        {/* Desktop  book room */}
        <div className="hidden lg:flex flex-row gap-5 items-center">
          <Link className="no-underline" href="/room">
            <button className="w-[180px] cursor-pointer h-[48px] bg-amber-900 text-white rounded-full text-center hover:bg-amber-700 transition-colors duration-300">
              Book Room
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-5 transition-all duration-500">
          <div className="flex flex-col space-y-4">
            {NavLink.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname.startsWith(link.href) && link.href !== "/");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`transition-colors text-md font-bold ${
                    isActive ? "text-amber-900 font-semibold" : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* <form className="w-full">
              <input
                type="search"
                placeholder="search for room"
                className="w-full h-[40px] border-2 border-amber-900 rounded-3xl pl-5"
              />
            </form> */}

            <div className="flex flex-col gap-3 mt-3">
              <Link href="/room" onClick={() => setMenuOpen(false)}>
                <button className="w-full h-[40px] bg-amber-900 text-white rounded-full text-center hover:bg-amber-700 transition-colors duration-300">
                  Book Room
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
