/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useMemo, useState } from 'react';
import { Button, Input } from "@nextui-org/react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Title from '@/components/shared/title';
import Link from 'next/link';

const page = () => {
    const [value, setValue] = useState(" ");
    const [isVisible, setIsVisible] = useState(false);
    const [touched, setTouched] = useState(false);

    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = useMemo(() => {
        if (value === "") return false;

        return validateEmail(value) ? false : true;
    }, [value]);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleBlur = () => setTouched(true);

    return (
        <section className='h-screen '>
            <Title name={"Login"} />
            <div className='flex flex-col w-full  md:w-[400px]'>
                <div className='py-3'>
                    <div className="label ml-2 pb-1">
                        <span className="text-[14px]">Email</span>
                    </div>
                    <div>
                        <Input
                            type="email"
                            label="Email"
                            variant="bordered"
                            isInvalid={isInvalid && touched}
                            errorMessage={isInvalid && touched && "enter a valid email"}
                            onValueChange={setValue}
                            onBlur={handleBlur}
                            className="w-full max-w-md"
                        />
                    </div>
                </div>
                <div className='pt-3'>
                    <div className="label ml-2 pb-1">
                        <span className="text-[14px]">Password</span>
                    </div>
                    <div>
                        <Input
                            label="Password"
                            variant="bordered"
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                    {isVisible ? (
                                        <AiFillEye className="text-2xl text-default-400 pointer-events-none" />

                                    ) : (
                                        <AiFillEyeInvisible className="text-2xl text-default-400 pointer-events-none" />

                                    )}
                                </button>
                            }
                            type={isVisible ? "text" : "password"}
                            className="w-full max-w-md"
                        />
                    </div>
                </div>
                <div className="label ml-2 p-1">
                    <span className="text-[14px] cursor-pointer text-warning-500">Forget Password?</span>
                </div>
                <Button radius="md" className='mt-5'>
                    Login
                </Button>
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
