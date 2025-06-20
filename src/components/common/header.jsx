'use client';

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-[#0858A8] text-black p-4 px-8">
      <h1 className="text-xl font-bold">Logo</h1>
      <input
        type="text"
        placeholder="🔍Search for products..."
        className="px-4 py-2 rounded-md text-black w-1/2 border border-white"
      />
      <button className="bg-blue-900 text-white px-4 py-2 rounded-md">🛒 Cart</button>
    </header>
  );
}
