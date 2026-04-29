import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {

    return (
        <div>
            <div className='flex items-center gap-1'>
                <Image className='rounded-full' height={50} width={50} src={'/image.png'} alt='cow'></Image>
                <h2 className='text-xl font-bold'>QurbaniHat</h2>
            </div>
            <NavLink></NavLink>
        </div>
    );
};

export default Navbar;