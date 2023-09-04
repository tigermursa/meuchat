'use client'

import Button from '@/components/ui/Button';
import { signIn } from 'next-auth/react';
import React, { FC, useState } from 'react';
import { FcGoogle } from "react-icons/fc";

interface pageProps { }

const page: FC<pageProps> = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    async function loginWithGoogle() {
        setIsLoading(true)
        try {
            await signIn('google')
        } catch (error) {

        } finally {
            setIsLoading(false)
        }

    }
    return <>
        <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className='w-full flex flex-col items-center max-w-md space-y-8'>
                <div className='flex flex-col items-center gap-8 '>
                    logo
                    <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>sign in to your holy account</h2>
                </div>
                <Button isLoading={isLoading} type='button' className='max-w-sm mx-auto w-full' onClick={loginWithGoogle}>
                    {isLoading ? null : (<FcGoogle />)}   Google
                </Button>
            </div>
        </div>
    </>

};

export default page;