import React from "react";
import Link from 'next/link';
import Image from "next/image";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <div className="mb-10">
        <Image
          src="/images/landing-image.webp" // Replace with your image path
          alt="Centered Landing Image"
          width={350}
          height={350}
          className="object-contain" // Ensures the image scales down within the bounds
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Welcome to the Marvel Heroes Portal!</h1>
      <p className="text-lg md:text-xl mb-8 text-center">Discover the amazing world of Marvel heroes and their incredible stories.</p>
      <Link href="/heroes">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          Explore Heroes
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;
