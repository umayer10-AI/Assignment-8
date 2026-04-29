import CardList from '@/component/CardList';
import { getData } from '@/lib/fetching';
import React from 'react';

const page = async () => {

    const data = await getData()
    console.log(data)

    return (
        <div>
            <h2 className='text-2xl font-bold my-5'>All Animals</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                {
                    data.map(v => <CardList key={v.id} p={v}></CardList>)
                }
            </div>
        </div>
    );
};

export default page;