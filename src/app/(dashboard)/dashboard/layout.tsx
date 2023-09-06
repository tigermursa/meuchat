import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React, { FC, ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode
}

const Layout = async ({ children }: LayoutProps) => {

    const session = await getServerSession(authOptions)
    return (
        <div className='w-full flex h-screen'>
            {children}
        </div>
    );
};

export default Layout;