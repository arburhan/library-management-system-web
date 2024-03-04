'use client'
import { Button, Input } from '@nextui-org/react';
import React from 'react';
import { useForm } from 'react-hook-form';

const Lendbook = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);
    };
    // Get the date 3 days from now
    const threeDaysFromNow = new Date();
    threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);
    const minDate = `${threeDaysFromNow.getFullYear()}-${String(threeDaysFromNow.getMonth() + 1).padStart(2, '0')}-${String(threeDaysFromNow.getDate()).padStart(2, '0')}`;

    return (
        <section className='py-3 md:py-10' >
            <form className='flex flex-col md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-4' onSubmit={handleSubmit(onSubmit)}>
                {/*book isbn */}
                <div className="w-full">
                    <div className="label ml-2 pb-1">
                        <span className="text-[14px]">Book ISBN</span>
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
                {/* email */}
                <div>
                    <div className="label ml-2 pb-1">
                        <span className="text-[14px]">Email</span>
                    </div>
                    <div>
                        <Input
                            type="email"
                            label="Email"
                            variant="bordered"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                            className="w-full max-w-md"
                        />
                        {errors.email && <small className='text-red-500 ml-1' >{errors.email.message}</small >}
                    </div>
                </div>
                {/*lend time*/}
                <div className="w-full">
                    <div className="label ml-2 pb-1">
                        <span className="text-[14px]">Lend time</span>
                    </div>
                    <div>
                        <Input
                            type="date"
                            variant="bordered"
                            className="w-full "
                            min={minDate}
                            {...register('lendTime', {
                                required: 'lend time is required',
                                validate: value => new Date(value) >= threeDaysFromNow || 'Please select a date at least 3 days from today'
                            })}
                        />
                        {errors.lendTime && <small className='text-red-500 ml-1' >{errors.lendTime.message}</small >}
                    </div>
                </div>
                <Button type="submit" radius="md" className='mt-4 w-full bg-primary-500 md:h-20'>
                    Lend book
                </Button>
            </form>
        </section>
    );
};

export default Lendbook;