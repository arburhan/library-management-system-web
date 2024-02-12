'use client'
import Image from 'next/image';
import React from 'react';
import styles from '../../../../styles.module.css';
import SemesterModal from './semesterModal';
import { useDisclosure } from '@nextui-org/react';


const DepartmentCard = ({ department, deptImage }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpen = () => {
        onOpen();
    }
    return (
        <div className={`${styles.deptBanner} border-2 border-black  cursor-pointer card w-[100px] md:w-[200px] p-3 rounded-xl hover:border-red-500 hover:border-2`} onClick={handleOpen}>
            <Image src={deptImage} width={100} placeholder="blur"
                quality={100} alt={department} loading='lazy' />
            <h1 className='text-center font-bold'>{department}</h1>
            <SemesterModal isOpen={isOpen} onClose={onClose} />
        </div>
    );
};

export default DepartmentCard;