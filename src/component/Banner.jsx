import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className={"bg-[url('https://imgcdn.stablediffusionweb.com/2024/9/26/031f42cc-2894-42a1-876e-73e0bd68dc57.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl"}>
        <div className="w-full h-full rounded-lg bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl">
              QurbaniHat – Livestock Booking Platform
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
              Make Your Qurbani Easier This Eid al-Adha
            </p>

            <div className="flex gap-4">
              <Link href="/all-animal">
                <Button className="bg-linear-to-r from-green-500 via-blue-500 bg-green-500">
                  All Animals
                </Button>
              </Link>

              <Link href="/pricing">
                <Button variant="outline" className="text-white">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
