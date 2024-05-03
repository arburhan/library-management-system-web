/* eslint-disable react-hooks/rules-of-hooks */
/* 'use client'
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

const page = () => {
    const { data, status } = useSession();

    if (data?.user?.role === 'student') {
        redirect('/dashboard/user');
    } else if (data?.user?.role === 'librarian') {
        redirect('/dashboard/librarian');
    }
    redirect('/login');

    return (
        <div>

        </div>
    );
};

export default page; */