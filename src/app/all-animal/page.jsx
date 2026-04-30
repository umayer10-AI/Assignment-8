import CardList from '@/component/CardList';
import SortedList from '@/component/SortedList';
import { getData } from '@/lib/fetching';
import React from 'react';

const page = async () => {

    const data = await getData()
    console.log(data)

    return (
        <div>
            <h2 className='text-2xl font-bold mt-5 mb-3'>All Animals</h2>
            <div className='flex justify-center mb-2'>
                <SortedList></SortedList>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                {
                    data.map(v => <CardList key={v.id} p={v}></CardList>)
                }
            </div>
        </div>
    );
};

export default page;