import { Add } from '@/public/assets/icons/Add'
import React from 'react'

// DESKTOP VERSION NOT DONE :(

const page = () => {
    return (
        // onboarding form
        <div className=" flex-col w-full mx-auto px-6">
            <h1 className="flex-center text-3xl font-bold mb-4">Onboarding</h1>
            <form className="">
                {/* Profile picture */}
                <div >
                    <div className="mt-1 w-full flex-center">
                        {/* Hidden file input */}
                        <input type="file" id="profile-picture" name="profile-picture" className="sr-only" />

                        {/* Circular button */}
                        <label htmlFor="profile-picture" className="w-36 h-36 rounded-full overflow-hidden border border-gray-300 cursor-pointer flex justify-center items-center">
                            {/* Add icon */}
                            <Add className="w-10 h-10 rounded-full text-gray-400 border border:text-gray-300" />
                        </label>
                    </div>
                </div>
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:bg-accent-foreground" />
                </div>
                {/* Username */}
                <div>
                    <label htmlFor="username" className="block">Username</label>
                    <input type="text" id="username" name="username" className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:bg-accent-foreground" />
                </div>
                {/* Phone number */}
                <div>
                    <label htmlFor="phone" className="block">Phone Number</label>
                    <input type="text" id="phone" name="phone" className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:bg-accent-foreground" />
                </div>
                {/* Submit button */}
                <div className='flex-center my-4 w-full'>
                    <button type="submit" className="bg-accent-foreground text-white px-4 py-2 rounded-md hover:bg-accent-foreground focus:outline-none focus:bg-accent-foreground">Submit</button>
                </div>
            </form>
        </div>

    )
}

export default page