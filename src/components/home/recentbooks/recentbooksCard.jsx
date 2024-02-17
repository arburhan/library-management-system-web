import { Card, CardBody, CardFooter } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import booksImage from '../../../../public/images/departments/communicationImg.png';

const RecentbooksCard = ({ book }) => {
  const { name, dept, semester, shelf } = book;
  return (
    <Card className="py-4">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={booksImage}
          width={270}
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
        <span className="text-tiny uppercase"> {name}</span>
        <small className="text-default-500">Department: {dept}</small>
        <small className="text-default-500">Semester: {semester > 3 ? semester + "th" : (semester == 1 ? semester + "st" : (semester == 2 ? semester + "nd" : semester + "rd"))}</small>
        <small className="text-default-500">Shelf No: {shelf}</small>
      </CardFooter>
    </Card >
  );
};

export default RecentbooksCard;