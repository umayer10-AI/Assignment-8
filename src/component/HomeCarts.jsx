import { getData } from '@/lib/fetching';
import React from 'react';
import CardList from './CardList';

const HomeCarts = async () => {

    const data = await getData()

    return (
        <div>
            <h2 className='text-2xl font-bold mt-8 mb-5'>Top Animals</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                {
                    data.slice(8,12).map(v => <CardList key={v.id} p={v}></CardList>)
                }
            </div>
        </div>
    );
};

export default HomeCarts;