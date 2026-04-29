import FormData from '@/component/FormData';
import { getData } from '@/lib/fetching';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
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
        <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10">

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="relative w-full h-75">
            <Image
              src={data.image}
              alt={data.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 space-y-3">
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <p className="text-gray-600">{data.description}</p>

            <p><b>Category:</b> {data.category}</p>
            <p><b>Price:</b> <b className='text-green-600 text-xl'>৳{data.price}</b></p>
          </div>
        </div>

        <FormData  animal={data}></FormData>

      </div>
    </div>
    );
};

export default page;