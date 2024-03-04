/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React from 'react';
import { Button, Input } from "@nextui-org/react";
import Title from '@/components/shared/title';
import Link from 'next/link';
import { useForm } from "react-hook-form";

const page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);
    };


    return (
        <section className='h-screen'>
            <Title name={"Login"} />
            <div className='flex flex-col items-center'>
                <form className=' w-full  md:w-[400px] px-4 md:px-2' onSubmit={handleSubmit(onSubmit)}>
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
                    {/* password */}
                    <div className='py-2'>
                        <div className="label ml-2 pb-1">
                            <span className="text-[14px]">Password</span>
                        </div>
                        <div>
                            <Input
                                type="password"
                                label="Password"
                                variant="bordered"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 8,
                                        message: 'Password must have at least 8 characters'
                                    }
                                })}
                                className="w-full max-w-md"
                            />
                            {errors.password && <small className='text-red-500 ml-1' >{errors.password.message}</small >}
                        </div>
                    </div>
                    <div className="label ml-2">
                        <span className="text-[14px] cursor-pointer text-warning-500">Forget Password?</span>
                    </div>
                    <Button type="submit" radius="md" className='mt-4 w-full'>
                        Login
                    </Button>
                </form>
                <div className="label ml-2 p-1">
                    <span className="text-[14px]">New Here? <Link href='/signup'><span className='cursor-pointer text-orange-200 hover:text-warning-500'>Sign up Now</span></Link> </span>
                </div>
                <div>
                </div>
            </div>
        </section>
    );
};

export default page;
