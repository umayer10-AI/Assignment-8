import Image from 'next/image';
import React from 'react';
import NavLink from './NavLink';
import { Button } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import UserIdentify from './UserIdentify';

const Navbar = () => {
    
    return (
        <div className='border-b lg:sticky top-0 bg-white z-50'>
            <div className='py-3 w-[90%] mx-auto flex flex-col lg:flex-row gap-3 lg:gap-0 items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <Image className='rounded-full' height={35} width={35} src={'/logo.png'} alt='cow'></Image>
                    <h2 className='text-xl font-bold'>QurbaniHat</h2>
                </div>
                <NavLink></NavLink>

                <UserIdentify></UserIdentify>
                
            </div>
        </div>
    );
};

export default Navbar;