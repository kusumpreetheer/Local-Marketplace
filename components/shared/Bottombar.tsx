"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Profile } from "@/public/assets/icons/Profile";
import { Add } from "@/public/assets/icons/Add";
import { ConvenientStore } from "@/public/assets/icons/ConvenientStore";

const Bottombar = () => {
  const pathname = usePathname()

  return (
    <section className="bottom-bar-container">
      <div className="bottom-bar">
        {/* Home */}
        <Link
            href="/"
            className={`p-4 transition
                      ${pathname === "/" ? "[&_*]:text-primary-foreground": "[&_*]:text-primary-foreground/50"}`}
          >
            <ConvenientStore className='text-[28px]'/>
        </Link>

        {/* Create */}
        <Link
            href="/services/create"
            className={`p-4 transition
                      ${pathname === "/services/create" ? " [&_*]:text-primary-foreground": " [&_*]:text-primary-foreground/50"}`}
          >
            <Add className='text-[28px]'/>
        </Link>

        {/* Profile */}
        <Link
            href="/profile/" 
            className={`p-4 transition
                      ${pathname === "/profile" ? " [&_*]:text-primary-foreground": " [&_*]:text-primary-foreground/50"}`}
        >
            <Profile className='text-[28px]'/>
        </Link>
      </div>

    </section>
  )
}

export default Bottombar