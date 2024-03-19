import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import ProfileButton from "./ProfileButton"
import { Message } from "@/public/assets/icons/Message"
import { Add } from "@/public/assets/icons/Add"

const HomeHeader = () => {
    return (
        <header className="w-full bg-primary sticky top-0 z-50">
            <div className="wrapper flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex gap-x-4 items-center">
                    <Image
                        src="/assets/images/favicon.ico"
                        width={48}
                        height={48}
                        alt="LM_logo"
                        priority={true}
                    />
                    <div>
                        <div>Local</div>
                        <div>Marketplace</div>
                    </div>
                </Link>

                {/* Signin or "Create & Profile" */}
                <div className="flex gap-3">

                    {/* when signed in */}
                    <SignedIn>
                        <div className="flex-between w-full max-w-xs gap-x-4 items-center">
                            {/* link to service page */}
                            <div className="hidden md:block">
                                <Link 
                                    href={"/services/create"} 
                                    className="text-primary-foreground/80 flex-center p-medium-16 whitespace-nowrap">
                                    <div className="relative w-12 h-12">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Add className="w-8 h-8" />
                                        </div>
                                        <div className="absolute inset-0 rounded-full bg-transparent transition ease-in-out duration-300 hover:bg-black/50 opacity-0 hover:opacity-100"></div>
                                    </div>
                                </Link>
                            </div>
                            {/* Message */}
                            <div className="flex">
                                <div className="relative w-12 h-12">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Message className="w-7 h-7" />
                                    </div>
                                    <div className="absolute inset-0 rounded-full bg-transparent transition ease-in-out duration-300 hover:bg-black/50 opacity-0 hover:opacity-100"></div>
                                </div>
                            </div>
                            {/* Link to profile page */}       
                            <div className="hidden md:flex items-center w-12 h-12">
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