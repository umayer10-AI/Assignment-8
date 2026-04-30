import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div className="relative flex justify-center">
          <Image
            height={400} width={400}
            src={'/cow.png'}
            alt="Qurbani Animal"
            className="rounded-2xl shadow-xl"
          />
          <div className="absolute -bottom-5 -left-5 bg-green-600 text-white px-4 py-2 rounded-xl shadow-lg">
            Trusted Since 2024
          </div>
        </div>

        {/* Right Content */}
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

          {/* Features */}
          <div className="space-y-3">
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

          {/* Button */}
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;