import Image from 'next/image';
import React from 'react';
import styles from '../../../../styles.module.css';

const DepartmentCard = ({ department, deptImage }) => {
    return (
        <div className={`${styles.deptBanner} border-2 border-black  cursor-pointer card w-[100px] md:w-[200px] p-3 rounded-xl hover:border-red-500 hover:border-2`}>
            <Image src={deptImage} width={100} placeholder="blur"
                quality={100} alt={department} loading='lazy' />
            <h1 className='text-center font-bold'>{department}</h1>
        </div>
    );
};

export default DepartmentCard;