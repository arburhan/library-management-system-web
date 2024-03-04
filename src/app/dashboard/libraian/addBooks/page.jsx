'use client'
import React from 'react';
import { Button, Input } from "@nextui-org/react";
import { useForm } from 'react-hook-form';
import Title from '@/components/shared/title';

const AddBooks = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);
    };
    return (
        <section>
            <Title name={"Add books"} />
            <form className='flex flex-col px-3 gap-y-2 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-4' onSubmit={handleSubmit(onSubmit)}>
                {/* book name  */}
                <div className="w-full">
                    <div className="label ml-2 pb-1">
                        <span className="text-[14px]">Name</span>
                    </div>
                    <div>
                        <Input
                            type="name"
                            label="Book name"
                            variant="bordered"
                            className="w-full "
                            {...register('bookName', {
                                required: 'Name is required'
                            })}
                        />
                        {errors.bookName && <small className='text-red-500 ml-1' >{errors.bookName.message}</small >}
                    </div>
                </div>
                {/* isbn */}
                <div className="w-full">
                    <div className="label ml-2 pb-1">
                        <span className="text-[14px]">ISBN</span>
                    </div>
                    <div>
                        <Input
                            type="isbn"
                            label="ISBN"
                            variant="bordered"
                            className="w-full "
                            {...register('bookISBN', {
                                required: 'ISBN is required'
                            })}
                        />
                        {errors.bookISBN && <small className='text-red-500 ml-1' >{errors.bookISBN.message}</small >}
                    </div>
                </div>
                {/* writer name */}
                <div className="w-full">
                    <div className="label ml-2 pb-1">
                        <span className="text-[14px]">Writer Name</span>
                    </div>
                    <div>
                        <Input
                            type="name"
                            label="Writer Name"
                            variant="bordered"
                            className="w-full "
                            {...register('writerName', {
                                required: 'Writer name is required'
                            })}
                        />
                        {errors.writerName && <small className='text-red-500 ml-1' >{errors.writerName.message}</small >}
                    </div>
                </div>
                {/* pub name */}
                <div className="w-full">
                    <div className="label ml-2 pb-1">
                        <span className="text-[14px]">Publication Name</span>
                    </div>
                    <div>
                        <Input
                            type="name"
                            label="publication"
                            variant="bordered"
                            className="w-full "
                            {...register('pubName', {
                                required: 'Publication Name is required'
                            })}
                        />
                        {errors.pubName && <small className='text-red-500 ml-1' >{errors.pubName.message}</small >}
                    </div>
                </div>
                {/* deptName */}
                <div className="w-full">
                    <div className="label ml-2 pb-1">
                        <span className="text-[14px]">Department Name</span>
                    </div>
                    <div>
                        <Input
                            type="department"
                            label="Department"
                            variant="bordered"
                            className="w-full "
                            {...register('deptName', {
                                required: 'Department Name is required'
                            })}
                        />
                        {errors.deptName && <small className='text-red-500 ml-1' >{errors.deptName.message}</small >}
                    </div>
                </div>
                {/* shelfNum */}
                <div className="w-full">
                    <div className="label ml-2 pb-1">
                        <span className="text-[14px]">Shelf Number</span>
                    </div>
                    <div>
                        <Input
                            type="number"
                            label="Shelf"
                            variant="bordered"
                            className="w-full "
                            {...register('shelfNum', {
                                required: 'Shelf number is required'
                            })}
                        />
                        {errors.shelfNum && <small className='text-red-500 ml-1' >{errors.shelfNum.message}</small >}
                    </div>
                </div>
                {/* semester */}
                <div className="w-full">
                    <div className="label ml-2 pb-1">
                        <span className="text-[14px]">Semester</span>
                    </div>
                    <div>
                        <Input
                            type="number"
                            label="Semester"
                            variant="bordered"
                            className="w-full "
                            {...register('semester', {
                                required: 'Semester is required'
                            })}
                        />
                        {errors.semester && <small className='text-red-500 ml-1' >{errors.semester.message}</small >}
                    </div>
                </div>
                {/* stock */}
                <div className="w-full">
                    <div className="label ml-2 pb-1">
                        <span className="text-[14px]">Stock</span>
                    </div>
                    <div>
                        <Input
                            type="number"
                            label="Stock"
                            variant="bordered"
                            className="w-full "
                            {...register('stock', {
                                required: 'Stock is required'
                            })}
                        />
                        {errors.stock && <small className='text-red-500 ml-1' >{errors.stock.message}</small >}
                    </div>
                </div>
                {/* common optional */}
                <div className="w-full">
                    <div className="label ml-2 pb-1">
                        <span className="text-[14px]">Common status</span>
                    </div>
                    <div>
                        <Input
                            type="boolean"
                            label="status"
                            variant="bordered"
                            className="w-full "
                            {...register('commonName', {
                                required: 'Common status is required'
                            })}
                        />
                        {errors.commonName && <small className='text-red-500 ml-1' >{errors.commonName.message}</small >}
                    </div>
                </div>
                <Button type="submit" radius="md" className='mt-4 w-full md:h-20'>
                    Add book
                </Button>
            </form>

        </section>
    );
};

export default AddBooks;