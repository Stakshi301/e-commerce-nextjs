'use client';

import { useState } from "react";
import Link from "next/link";

export default function Header({onSearch}) {

    const[query,setQuery]=useState('');

    const handleSearch=(e)=>{
        setQuery(e.target.value);
        onSearch(e.target.value);
    }
  return (
    <header className="flex justify-between gap-2 items-center bg-[#0858A8] text-black p-4 px-8">
      <h1 className="text-xl font-bold">Logo</h1>
      <input
        type="text"
        placeholder="🔍Search for products..."
        value={query}
        onChange={handleSearch}
        className="px-4 py-2 rounded-md text-black w-1/2 border border-white"
      />
      <Link href="/cart">
      <button className="bg-blue-900 text-white px-4 py-2 rounded-md">🛒 Cart</button>
      </Link>
    </header>
  );
}
