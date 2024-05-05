import React from 'react';
import { Card, CardBody, CardFooter } from '@nextui-org/react';
import Image from 'next/image';


const RecentbooksCard = ({ book }) => {
  const { bookName, deptName, semester, shelfNum, image } = book;
  return (
    <Card className="pb-3">
      <CardBody className="overflow-visible p-0">
        <Image
          alt="Card background"
          className="object-cover rounded-xl h-48 md:h-52 p-0"
          src={image}
          height={270}
          width={270}
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 flex-col items-start">
        <p className='pb-1'>Name: <span className="text-default-500 text-base"> {bookName}</span> </p>
        <p className=' text-sm font-light'>Department: <span className="text-default-500 text-sm"> {deptName}</span> </p>
        <p className=' text-sm font-light py-1'>
          Semester:
          <span className="text-default-500"> {semester > 3 ? semester + "th" : (semester == 1 ? semester + "st" : (semester == 2 ? semester + "nd" : semester + "rd"))}</span>
        </p>
        <p className=' text-sm font-light'>
          Shelf No:<span className="text-default-500"> {shelfNum}</span>
        </p>
      </CardFooter>
    </Card >
  );
};

export default RecentbooksCard;