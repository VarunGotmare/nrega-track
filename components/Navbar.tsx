"use client";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center items-center px-4 py-4 bg-white shadow-sm fixed top-0 left-0 z-10 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="NREGA Track Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
        <h1 className="text-xl sm:text-2xl font-bold text-orange-600">NREGA Track</h1>
      </div>
    </nav>
  );
}
