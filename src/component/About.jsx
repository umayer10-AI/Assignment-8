import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="pb-10 pt-15">
      <div className="max-w-6xl mx-auto px-4 py-5 grid md:grid-cols-2 gap-10 items-center shadow-2xl rounded-xl">
        
        <div className="flex justify-center">
          <Image
            height={400} width={400}
            src={'/cow.png'}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Qurbani Animal"
            className="rounded-2xl shadow-xl"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4">
            About Our Qurbani Service
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            We are dedicated to making your Qurbani experience simple, reliable,
            and meaningful. Our platform connects you with trusted sellers,
            ensuring healthy and verified animals for your sacrifice.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            From selecting the right animal to completing the Qurbani process,
            we follow proper Islamic guidelines and maintain high standards of
            care and hygiene.
          </p>

          <div className="space-y-3 font-semibold">
            <p className="flex items-center gap-2 text-gray-700">
              ✅ Verified & healthy animals
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              ✅ Trusted sellers & fair pricing
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              ✅ Easy booking & smooth process
            </p>
          </div>

          <Button className="mt-6 h-12 bg-linear-to-r from-green-500 to-blue-500 rounded-xl shadow hover:bg-green-700 transition">
            Learn More
          </Button>
        </div>

      </div>
    </div>
  );
};

export default About;