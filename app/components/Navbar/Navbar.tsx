import React from "react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full py-1 px-4 bg-blue-900 text-white p-1 border-b-2 border-gray-500">
      <div className="flex items-center justify-between">
        {/* Left-aligned "Home" link */}
        <div>
          <Link
            href="/heroes"
            className="text-xl font-semibold hover:text-gray-300 hover:underline"
          >
            Home
          </Link>
        </div>

        {/* Centered links */}
        <div className="flex-1 flex justify-center space-x-6">
          <a href="#comic_group" className="text-lg hover:text-gray-300 hover:underline">
            Comics
          </a>
          <a href="#event_group" className="text-lg hover:text-gray-300 hover:underline">
            Events
          </a>
          <a href="#series_group" className="text-lg hover:text-gray-300 hover:underline">
            Series
          </a>
          <a href="#story_group" className="text-lg hover:text-gray-300 hover:underline">
            Stories
          </a>
        </div>
      </div>
    </nav>
  );
}
