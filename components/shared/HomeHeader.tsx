"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import ProfileButton from "./ProfileButton"
import { Message } from "@/public/assets/icons/Message"
import { Add } from "@/public/assets/icons/Add"
import { useMediaQuery } from "@mantine/hooks"
import SeedButton from "@/lib/SeedButton"
import { SearchIcon } from "@/public/assets/icons/SearchIcon";

const HomeHeader = () => {

    let isMobile = useMediaQuery('(max-width: 768px)')

    return (
        <header className="sticky top-0 z-50 w-full px-4 pt-4 md:p-5">
            <div className="flex items-center justify-between wrapper">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-x-6">
                    <Image
                        src="/assets/images/favicon.ico"
                        width={`${isMobile ? "32" : "48"}`}
                        height={`${isMobile ? "32" : "48"}`}
                        alt="LM_logo"
                        priority={true}
                    />
                    <div className="text-md lg:text-lg">
                        <div>LOCAL MARKETPLACE</div>
                    </div>
                </Link>

                {/* Seeding Button */}
                {/* <SeedButton /> */}

                {/* Signin or "Create & Profile" */}
                <div className="flex gap-3">



                    {/* when signed in */}
                    <SignedIn>
                        <div className="items-center w-full max-w-xs flex-between gap-x-2">
                            {/* search button  */}
                            <div className="w-10 h-10 transition duration-300 ease-in-out rounded-full flex-center hover:bg-accent-light/50">
                                <Link href="/search">
                                    <SearchIcon className="text-[26px]" />
                                </Link>
                            </div>
                            {/* Add a service */}
                            <div className="hidden w-10 h-10 transition duration-300 ease-in-out rounded-full md:flex-center hover:bg-accent-light/50">
                                <Link
                                    href={"/services/create"}
                                    className=" flex-center p-medium-16 whitespace-nowrap">
                                    <Add className="text-[26px]" />
                                </Link>
                            </div>
                            {/* Message */}
                            <div className="w-10 h-10 transition duration-300 ease-in-out rounded-full flex-center hover:bg-accent-light/50">
                                <Message className="text-[26px]" />
                            </div>
                            {/* Link to profile page */}
                            <div className="items-center hidden w-8 h-8 m-2 md:flex hover-scale">
                                <ProfileButton />
                            </div>
                        </div>
                    </SignedIn>

                    {/*  when signed out */}
                    <SignedOut>
                        <div className="w-10 h-10 transition duration-300 ease-in-out rounded-full flex-center hover:bg-accent-light/50">
                            <Link href="/search">
                                <SearchIcon className="text-[26px]" />
                            </Link>
                        </div>

                        <Button asChild variant="outline" className="rounded-md" size="lg">
                            <Link href="/sign-in">
                                Sign in
                            </Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader