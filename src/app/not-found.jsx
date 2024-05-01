'use client';
import { Button } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';

export default function NotFound() {
    const pathname = usePathname();
    const cleanedPathname = pathname.substring(1);
    const router = useRouter();

    return (
        <section className="flex flex-col items-center justify-center text-center min-h-screen space-y-6 bg-[#111729]">
            <p className=' text-secondary-600 text-lg'>There was a problem</p>
            <h3 className=' text-2xl px-5'>We cannot the found your requested <span className='text-red-500'>{cleanedPathname}</span> page</h3>
            <Button
                onClick={() => {
                    router.push('/');
                }}
                className='w-40 h-12 text-lg' color="secondary" variant="flat">
                Home
            </Button>
        </section>
    )
}