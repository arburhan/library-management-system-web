'use client'
import React from 'react';
import Image from 'next/image';
import bannerImage from '../../../public/images/banner.jpg';
import { useSession } from 'next-auth/react';


const Banner = () => {
    const { data, session } = useSession();

    return (
        <section className='relative'>
            <div className=''>
                <Image
                    className='h-[100vh] w-[100vw]'
                    alt="library banner image"
                    src={bannerImage}
                    placeholder="blur"
                    quality={100}
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
            <div className='absolute bottom-56  flex items-center justify-center'>
                <div className='bg-[#ffffffb6] p-5 rounded-md text-center w-full md:w-[50%]'>
                    <p className='py-4 text-black' >Distributing high end tools to help create your ideal vision for a project, home, or application. We are your partners, confidants and most importantly your guidance to help you complete projects that matter. </p>
                    <button className='details-btn rounded-full border border-[black] text-black px-8 py-3 hover:bg-[#db011c] hover:ease-linear duration-[.2s] hover:text-white hover:border-[#db011c] text-[12px]' >Show Lecture</button>
                </div>
            </div>
        </section >
    );
};

export default Banner;