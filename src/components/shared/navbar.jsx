'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import { AiOutlineLogout } from "react-icons/ai";

export function NavbarComponent() {
    const { data, session } = useSession();
    const handLeLogout = () => {
        signOut();
    }
    // console.log(data);
    return (
        <Navbar>
            <NavbarBrand>
                <Link href="/" color="foreground" className="text-xl">
                    AR Library
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link href="/#openingHour">
                        Schedule
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/#departments" aria-current="page" color="foreground" >
                        Departments
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/recentbooks">
                        Recent Books
                    </Link>
                </NavbarItem>
            </NavbarContent>

            {
                data ? <NavbarContent justify="end">
                    <NavbarItem>
                        <Link onClick={handLeLogout} className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-md py-2 px-8 rounded-xl cursor-pointer">
                            logout <AiOutlineLogout />
                        </Link>
                    </NavbarItem>
                </NavbarContent> :
                    <NavbarContent justify="end">
                        <NavbarItem>
                            <Link href='/login' className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-md py-2 px-8 rounded-xl">
                                login
                            </Link>
                        </NavbarItem>
                    </NavbarContent>

            }
        </Navbar>
    );
}
