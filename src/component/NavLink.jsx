"use client"
import { Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = () => {

    const p = usePathname()

    return (
        <div>
            <div className='flex items-center gap-2'>
                <Link href={'/'}>{p==='/' ? <Button size='sm' className={'bg-linear-to-r from-green-500 via-blue-500 bg-green-500'}>Home</Button> : <button className='font-semibold'>Home</button>}</Link>
                <Link href={'/all-animal'}>{p==='/all-animal' ? <Button size='sm' className={'bg-linear-to-r from-green-500 via-blue-500 bg-green-500'}>All animal</Button> : <button className='font-semibold'>All animal</button>}</Link>
                <Link href={'/profile'}>{p==='/profile' ? <Button size='sm' className={'bg-linear-to-r from-green-500 via-blue-500 bg-green-500'}>Profile</Button> : <button className='font-semibold'>Profile</button>}</Link>
            </div>
        </div>
    );
};

export default NavLink;