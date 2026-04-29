import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {

    return (
        <div className='border-b'>
            <div className='py-3 w-[90%] mx-auto flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <Image className='rounded-full' height={50} width={50} src={'/image.png'} alt='cow'></Image>
                    <h2 className='text-xl font-bold'>QurbaniHat</h2>
                </div>
                <NavLink></NavLink>
                <div className='flex'>
                    <button>Register</button>
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;