import React from 'react';
import { Card, CardBody, CardFooter } from '@nextui-org/react';
import Image from 'next/image';


const RecentbooksCard = ({ book }) => {
  const { booksName, deptName, semester, shelfNum, image } = book;
  return (
    <Card className="pb-3">
      <CardBody className="overflow-visible p-0">
        <Image
          alt="Card background"
          className="object-cover rounded-xl h-52 p-0"
          src={image}
          height={270}
          width={270}
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
        <span className="text-tiny uppercase"> {booksName}</span>
        <small className="text-default-500">Department: {deptName}</small>
        <small className="text-default-500">Semester: {semester > 3 ? semester + "th" : (semester == 1 ? semester + "st" : (semester == 2 ? semester + "nd" : semester + "rd"))}</small>
        <small className="text-default-500">shelf No: {shelfNum}</small>
      </CardFooter>
    </Card >
  );
};

export default RecentbooksCard;