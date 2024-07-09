/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React from 'react';
import { Button, Input } from "@nextui-org/react";
import Title from '@/components/shared/title';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { NavbarComponent } from '@/components/shared/navbar';

const page = () => {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors },
    } = useForm();
    const router = useRouter();

    const onSubmit = async data => {
        const url = process.env.NEXT_PUBLIC_API_URL + `/user`;
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (res.ok) {
            toast.success("User registered succesfully.")
            reset()
            toast("Login in now");
            router.replace("/login");
        } else {
            const response = await res.json();
            toast.error('email', { message: response?.detail ?? "User Registration Failed", type: "error" })
        }
    };
    return (
        <section className='h-screen '>
            <NavbarComponent />
            <Title name={"Create new account"} />
            <div className='flex flex-col items-center'>
                <form className='w-full  md:w-[400px] px-4 md:px-2' onSubmit={handleSubmit(onSubmit)}>
                    {/* name field */}
                    <div>
                        <div className="label ml-2 pb-1">
                            <span className="text-[14px]">Name</span>
                        </div>
                        <div>
                            <Input
                                type="name"

                                variant="bordered"
                                className="w-full max-w-md"
                                {...register('name', {
                                    required: 'Name is required'
                                })}
                            />
                            {errors.name && <small className='text-red-500 ml-1' >{errors.name.message}</small >}
                        </div>
                    </div>
                    {/* email */}
                    <div className='py-2'>
                        <div className="label ml-2 pb-1">
                            <span className="text-[14px]">Email</span>
                        </div>
                        <div>
                            <Input
                                type="email"

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
                    <div>
                        <div className="label ml-2 pb-1">
                            <span className="text-[14px]">Password</span>
                        </div>
                        <div>
                            <Input
                                type="password"

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
                    <Button type="submit" radius="md" className='mt-4 w-full'>
                        Signup
                    </Button>
                </form>
                <div className="label ml-2 p-1 my-4">
                    <span className="text-[14px]">Already Account? <Link href='/login'><span className='cursor-pointer text-orange-200 hover:text-warning-500'>Login now</span></Link> </span>
                </div>
                <div>
                </div>
            </div>
        </section>
    );
};

export default page;
