import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link href="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Sahand</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <button type="submit">
            <FaSearch className="text-slate-600" />
          </button>
        </form>

        <ul className="flex gap-4 items-center">
          <li className="hidden md:inline text-slate-700 hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="hidden md:inline text-slate-700 hover:underline">
            <Link href="/about">About</Link>
          </li>

          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <li className="hidden md:inline text-slate-700 hover:underline cursor-pointer">
              <SignInButton />
            </li>
          </SignedOut>
        </ul>
      </div>
    </header>
  );
}

export default Header;
