import AllCards from '@/component/AllCards';
import SortedList from '@/component/SortedList';
import { getData } from '@/lib/fetching';
import React from 'react';

const page = async () => {

    const data = await getData()

    return (
        <div>
            <h2 className='text-2xl font-bold mt-5 mb-3'>All Animals</h2>
            <div className='flex justify-center mb-2'>
                <SortedList></SortedList>
            </div>
            <AllCards data={data}></AllCards>
        </div>
    );
};

export default page;