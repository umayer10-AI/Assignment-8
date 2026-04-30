"use client"
import React from 'react';
import { Bounce, toast } from 'react-toastify';

const FormData = ({animal}) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success('Booking Confirm Successfully', {
              position: "top-center",
              autoClose: 500,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
    });
  };

    return (
        <div className="bg-white shadow-xl rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-4">
        Book {animal.name}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg"
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full p-3 border rounded-lg"
          required
        />

        <textarea
          name="address"
          placeholder="Address"
          className="w-full p-3 border rounded-lg"
          rows="3"
          required
        />

        <button
          type="submit"
          className="w-full bg-linear-to-r from-green-500 to-blue-500 text-white py-3 rounded-xl"
        >
          Confirm Booking
        </button>
      </form>
    </div>
    )
};

export default FormData;