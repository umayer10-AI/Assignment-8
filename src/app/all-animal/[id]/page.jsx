import { getData } from '@/lib/fetching';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

const page = async ({params}) => {

    const {id} = await params
    const f = await getData()
    const data = f.find(v => v.id === Number(id))
    console.log(data)

    return (
        <div>
            <div className="max-w-6xl mx-auto py-5">

      <Link href="/all-animal">
        <Button className="text-sm  bg-linear-to-r from-green-500 to-blue-500 flex items-center"><FaArrowLeftLong />Back</Button>
      </Link>

      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white dark:bg-[#0f0f10] shadow-xl rounded-2xl overflow-hidden">

        <div className='flex items-center pl-6'>
            <div className="relative w-full h-100">
            <Image
                src={data.image}
                alt={data.name}
                fill
                className="object-cover rounded-2xl"
            />
            </div>
        </div>

        <div className="p-6 space-y-4">

          <h1 className="text-3xl font-bold text-black">
            {data.name}
          </h1>

          <p className="text-gray-600">
            {data.description}
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">

            <div className="p-3 bg-gray-100 rounded-lg">
              <p className="text-gray-500">Type</p>
              <p className="font-semibold">{data.type}</p>
            </div>

            <div className="p-3 bg-gray-100 rounded-lg">
              <p className="text-gray-500">Breed</p>
              <p className="font-semibold">{data.breed}</p>
            </div>

            <div className="p-3 bg-gray-100 rounded-lg">
              <p className="text-gray-500">Category</p>
              <p className="font-semibold">{data.category}</p>
            </div>

            <div className="p-3 bg-gray-100 rounded-lg">
              <p className="text-gray-500">Location</p>
              <p className="font-semibold">{data.location}</p>
            </div>

            <div className="p-3 bg-gray-100 rounded-lg">
              <p className="text-gray-500">Age</p>
              <p className="font-semibold">{data.age} Years</p>
            </div>

            <div className="p-3 bg-gray-100 rounded-lg">
              <p className="text-gray-500">Weight</p>
              <p className="font-semibold">{data.weight} KG</p>
            </div>
          </div>

          <div className="text-2xl font-bold text-green-600">
            ৳ {data.price.toLocaleString()}
          </div>

          <button className="w-full bg-linear-to-r from-green-500 to-blue-500 text-white py-3 rounded-xl hover:scale-[1.02] transition">
            Book Now
          </button>

        </div>
      </div>
    </div>
        </div>
    );
};

export default page;