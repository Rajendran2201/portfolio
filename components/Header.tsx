'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  UserGroupIcon,
  AdjustmentsHorizontalIcon,
  PencilSquareIcon,
  ChatBubbleLeftEllipsisIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const navLinks = [
    {
      href: "/about",
      icon: UserGroupIcon,
      text: "Who am I?",
    },
    {
      href: "/experience",
      icon: AdjustmentsHorizontalIcon,
      text: "What I do?",
    },
    {
      href: "/projects",
      icon: PencilSquareIcon,
      text: "My Projects",
    },  
    {
      href: "/blog",
      icon: PencilSquareIcon,
      text: "What I write?",
    },
    {
      href: "/contact",
      icon: ChatBubbleLeftEllipsisIcon,
      text: "Wanna contact me?",
    },
     
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-[var(--header-height)] z-50 bg-black/95 header-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo with negative left margin to align at viewport edge */}
          <Link
            href="/"
            className="flex items-center gap-0 hover:opacity-80 transition-opacity md:ml-[-1rem]"
          >
            <Image
              src="/favicon.png"
              alt="Raj's Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-mono text-base">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link flex items-center gap-2 text-white hover:text-yellow-400 group"
              >
                <link.icon className="w-5 h-5 text-yellow-400 transition-transform group-hover:scale-110" />
                <span>{link.text}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="menu-button md:hidden text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-md p-1"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="menu-button-icon">
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`mobile-menu md:hidden ${
          isMenuOpen ? 'mobile-menu-visible' : 'mobile-menu-hidden'
        }`}
      >
        <div className="px-4 py-3 space-y-1 bg-black/95 header-blur border-t border-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className="nav-link flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-white hover:bg-gray-800/50 hover:text-yellow-400 group"
            >
              <link.icon className="w-5 h-5 text-yellow-400 transition-transform group-hover:scale-110" />
              <span>{link.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
