import React from 'react';
import Image from 'next/image';
import bannerImage from '../../../public/images/banner.jpg';
import styles from '../../../styles.module.css';


const BackgroundBanner = () => {
    return (
        <section className='relative'>

            <div className={styles.bgWrap}>
                <Image
                    alt="library banner image"
                    src={bannerImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
            <div className={`bg-white  text-center w-96`}>
                <p className='py-4 text-black' >Distributing high end tools to help create your ideal vision for a project, home, or application. We are your partners, confidants and most importantly your guidance to help you complete projects that matter.</p>
                <button className='details-btn rounded-full text-black px-12 py-4 hover:bg-[#db011c] hover:ease-linear duration-[.2s] hover:text-white' >View Details</button>
            </div>
        </section >
    );
};

export default BackgroundBanner;