'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import YouTube from "react-youtube";

const Videos = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 py-16 px-4 sm:px-8">
      {/* Title Section */}
      <h1 className="text-5xl font-bold text-white mb-10 text-center">Conference Videos</h1>

      {/* YouTube Video Section */}
      <div className="w-full max-w-3xl mb-12">
        <YouTube videoId="MWFTV4gdR50" className="w-full h-64 sm:h-96" />
      </div>

      {/* Explore More Section */}
      <div className="text-center text-white mb-16 mt-6">
        <p className="text-lg mb-4">Explore more on</p>

        <Link href="https://www.youtube.com/@AmenApostolicMedia" passHref>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-lg transition-all duration-200 ease-in-out">
            Amen Apostolic Media
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Videos;
