"use client"
import React, { useContext } from 'react';
import CardList from './CardList';
import { Data } from '@/context/Context';

const AllCards = ({data}) => {

    const {s} = useContext(Data)
    let all = [...data];
    if(s==='low'){
        all = [...data].sort((a,b) => a.price - b.price)
    }
    if(s==='high'){
        all = [...data].sort((a,b) => b.price - a.price)
    }
    if(s==='default'){
        all = [...data]
    }
    console.log(s)

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                {
                    all.map(v => <CardList key={v.id} p={v}></CardList>)
                }
            </div>
        </div>
    );
};

export default AllCards;