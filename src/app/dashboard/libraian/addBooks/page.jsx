'use client'
import React, { useState } from 'react';
import { Input } from "@nextui-org/react";

const AddBooks = () => {
    const [bookName, setBookName] = useState("");
    const [writerName, setWriterName] = useState("");
    const [pubName, setPubName] = useState("");
    const [deptName, setDeptName] = useState("");
    const [shelfNum, setShelfNum] = useState(0);
    const [semester, setSemesterNum] = useState("");
    const [stock, setStock] = useState(0);
    const [commonName, setCommonName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("book name: ", bookName);
    }
    return (
        <section>
            <form className='flex flex-col md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-4' onSubmit={handleSubmit}>
                <div>
                    <span className='lebel text-xs ml-2'>Books Name</span>
                    <Input className='w-full' required type="name" variant="bordered" label="Book Name" onValueChange={setBookName} />
                </div>
                <div>
                    <span className='lebel text-xs ml-2'>Writer Name</span>
                    <Input className='w-full' required type="name" variant="bordered" label="Writer" onValueChange={setWriterName} />
                </div>
                <div>
                    <span className='lebel text-xs ml-2'>Publicatoin Name</span>
                    <Input className='w-full' required type="name" variant="bordered" label="Publicatoin" onValueChange={setPubName} />
                </div>
                <div>
                    <span className='lebel text-xs ml-2'>Deparment Name</span>
                    <Input className='w-full' required type="name" variant="bordered" label="Department" onValueChange={setDeptName} />
                </div>
                <div>
                    <span className='lebel text-xs ml-2'>Semester</span>
                    <Input className='w-full' required type="number" variant="bordered" label="Semester" onValueChange={setSemesterNum} />
                </div>
                <div>
                    <span className='lebel text-xs ml-2'>Shelf Number</span>
                    <Input className='w-full' required type="number" variant="bordered" label="Shelf" onValueChange={setShelfNum} />
                </div>
                <div>
                    <span className='lebel text-xs ml-2'>Stock</span>
                    <Input className='w-full' required type="number" variant="bordered" label="Stock" onValueChange={setStock} />
                </div>
                <div>
                    <span className='lebel text-xs ml-2'>Common Status</span>
                    <Input type="name" variant="bordered" label="Common" onValueChange={setCommonName} />
                    <span className='lebel text-xs ml-2 text-warning-300'>Its not required</span>
                </div>

                <input type='submit' value="Add Book" className='button bg-primary-500 p-3 rounded-lg cursor-pointer' />

            </form>

        </section>
    );
};

export default AddBooks;