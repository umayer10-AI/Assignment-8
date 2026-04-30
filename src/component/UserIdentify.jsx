"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import React from 'react';

const UserIdentify = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log(user)

    return (
        <div>
            {
                user? <div className='flex items-center gap-3'>
                    <h2 className='font-semibold hidden lg:flex'>{user?.name}</h2>
                    <Avatar size='sm'>
                        <Avatar.Image alt="Umayer Ahmad" src={user?.image} />
                        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                    </Avatar>
                    <Button onClick={async() => await authClient.signOut()} size='sm' variant='danger'>Log Out</Button>
                </div>
                : <div className='flex gap-2'>
                    <Button className={'bg-linear-to-r from-blue-500 to-green-500'}>Register</Button>
                    <Button variant='secondary'>Login</Button>
                </div>
            }
        </div>
    );
};

export default UserIdentify;