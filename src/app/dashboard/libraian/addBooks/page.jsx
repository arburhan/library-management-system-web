'use client'
import React from 'react';
import { Input } from "@nextui-org/react";

const AddBooks = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("object");
    }
    return (
        <section>
            <form className='flex flex-col md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-4' onSubmit={handleSubmit}>
                <div>
                    <span className='lebel text-xs ml-2'>Books Name</span>
                    <Input className='w-full' required type="name" variant="bordered" label="Book Name" />
                </div>
                <div>
                    <span className='lebel text-xs ml-2'>Writer Name</span>
                    <Input className='w-full' required type="name" variant="bordered" label="Writer" />
                </div>
                <div>
                    <span className='lebel text-xs ml-2'>Publicatoin Name</span>
                    <Input className='w-full' required type="name" variant="bordered" label="Publicatoin" />
                </div>
                <div>
                    <span className='lebel text-xs ml-2'>Deparment Name</span>
                    <Input className='w-full' required type="name" variant="bordered" label="Department" />
                </div>
                <div>
                    <span className='lebel text-xs ml-2'>Semester</span>
                    <Input className='w-full' required type="number" variant="bordered" label="Semester" />
                </div>
                <div>
                    <span className='lebel text-xs ml-2'>Shelf Number</span>
                    <Input className='w-full' required type="number" variant="bordered" label="Shelf" />
                </div>
                <div>
                    <span className='lebel text-xs ml-2'>Stock</span>
                    <Input className='w-full' required type="number" variant="bordered" label="Stock" />
                </div>
                <div>
                    <span className='lebel text-xs ml-2'>Common Status</span>
                    <Input type="name" variant="bordered" label="Common" />
                    <span className='lebel text-xs ml-2 text-warning-300'>Its not required</span>
                </div>

                <input type='submit' value="Add Book" className='button bg-primary-500 p-3 rounded-lg cursor-pointer' />

            </form>

        </section>
    );
};

export default AddBooks;