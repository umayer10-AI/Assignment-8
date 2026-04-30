import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Breeds = () => {
  const breeds = [
    { name: "Sahiwal", type: "Cow", img: "https://images.unsplash.com/photo-1618080206739-14e8ac105472?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y293fGVufDB8fDB8fHww" },
    { name: "Brahman", type: "Cow", img: "https://images.unsplash.com/photo-1484729191033-ab703f3eac3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvd3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Deshi Bull", type: "Bull", img: "https://images.unsplash.com/photo-1551606712-b0341396cc87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVsbHxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Black Bengal", type: "Goat", img: "https://images.unsplash.com/photo-1559203544-e4b02d061343?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGdvYXR8ZW58MHx8MHx8fDA%3D" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">🐄 Top Breeds</h2>
          <p className="text-gray-500 mt-2">
            Popular animals for Qurbani
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">

          {breeds.map((v,i) => (
            <div key={i} className="flex rounded-xl border bg-white shadow-xl py-5 flex-col items-center text-center">

              <div className="overflow-hidden rounded-full w-28 h-28 md:w-32 md:h-32">
                <Image
                  src={v.img}
                  alt={v.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="mt-3 text-lg font-semibold">{v.name}</h3>
              <p className="text-sm text-gray-500">{v.type}</p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Breeds;