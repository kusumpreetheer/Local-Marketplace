import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import ProfileButton from "./ProfileButton"
import { Message } from "@/public/assets/icons/Message"
import { Add } from "@/public/assets/icons/Add"
import SeedButton from "@/lib/SeedButton"

const HomeHeader = () => {
    return (
        <header className="w-full bg-primary sticky top-0 z-50 p-5">
            <div className="wrapper flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex gap-x-6 items-center">
                    <Image
                        src="/assets/images/favicon.ico"
                        width={48}
                        height={48}
                        alt="LM_logo"
                        priority={true}
                    />
                    <div className="text-lg">
                        <div>LOCAL</div>
                        <div>MARKETPLACE</div>
                    </div>
                </Link>

                {/* Seeding Button */}
                <SeedButton />

                {/* Signin or "Create & Profile" */}
                <div className="flex gap-3">

                    {/* when signed in */}
                    <SignedIn>
                        <div className="flex-between w-full max-w-xs gap-x-2 items-center">
                            {/* Add a service */}
                            <div className="hidden md:flex-center rounded-full hover:bg-accent-light/50 transition ease-in-out duration-300 w-10 h-10">
                                <Link 
                                    href={"/services/create"} 
                                    className=" flex-center p-medium-16 whitespace-nowrap">
                                    <Add className="text-[26px]"/>
                                </Link>
                            </div>
                            {/* Message */}
                            <div className="flex-center rounded-full hover:bg-accent-light/50 transition ease-in-out duration-300 w-10 h-10">
                                <Message className="text-[26px]" />
                            </div>
                            {/* Link to profile page */}       
                            <div className="hidden md:flex items-center w-8 h-8 m-2">
                                <ProfileButton />
                            </div>   
                        </div>
                    </SignedIn>

                    {/*  when signed out */}
                    <SignedOut>
                        <Button asChild className="rounded-full bg-primary/70" size="lg">
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