import React from "react";
import Link from "next/link";

 export default function Navbar() {
    return(
      <nav className="bg-gradient-to-r from-purple-700 to-blue-700 shadow-lg p-4 border-b-2 border-purple-900">
      <div className="container mx-auto flex justify-between items-center max-w-6xl"> {/* Added max-width */}
        <div className="text-white font-bold text-lg">
          <Link href="/">MyApp</Link>
        </div>
        <div className="space-x-8 flex items-center">
          <Link href="/" className="text-gray-200 hover:text-white transition duration-300 ease-in-out">
            Home
          </Link>
          <Link href="/Blog" className="text-gray-200 hover:text-white transition duration-300 ease-in-out">
            Blog
          </Link>
        </div>
      </div>
    </nav>

   

    )
 }