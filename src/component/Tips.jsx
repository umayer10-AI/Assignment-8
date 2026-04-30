import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Tips = () => {
    const tips = [
        "Choose a healthy animal (active with bright eyes)",
        "Check the age (must meet the minimum requirement)",
        "Ensure there are no diseases or injuries",
        "Provide proper feeding and clean water",
        "Try to buy from a trusted seller",
        "Follow Qurbani rules and Sunnah properly",
    ];

  return (
    <section className="pb-10 rounded-2xl pt-20 bg-linear-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">🐐 Qurbani Tips</h2>
          <p className="text-gray-500 mt-2">Smart choices make your Qurbani better & meaningful</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tips.map((v, i) => (
            <div key={i} className="group relative p-6 rounded-2xl bg-white shadow-md hover:scale-105 transition duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-green-200 to-green-100 opacity-0 group-hover:opacity-30 transition duration-500"></div>

              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-green-600 text-xl mt-1" />
                <p className="text-gray-700 font-medium">{v}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tips;