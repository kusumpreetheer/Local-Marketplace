"use client"

import CommonHeader from "@/components/shared/CommonHeader"
import dummmyRatingReviews from "@/constants/dummyReviews";
import dummyUsers from "@/constants/dummyUsers";
import React, { useState } from "react";

const MyReview = () => {

    const user = dummyUsers[0];
    const reviews = dummmyRatingReviews.filter(review => review.clientID === user._id);

    // state for editable ratings
    const [rating, setRating] = useState(reviews[0].rating);

    const hangleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRating(parseInt(e.target.value));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(rating);
    }

    return (
        <div>
            <CommonHeader title='Edit Review'/>
            {/* print review information */}
            <div className="mx-6">
                <div className="border border-gray-200 rounded-lg overflow-hidden h-[210px] relative">
                    <img className="w-full h-full object-cover"
                        width={5000} height={5000}
                        src={reviews[0].service.imageURL ?? ''} alt={reviews[0].service.imageURL ?? ''}
                    />
                </div>
                <div className="my-4">
                    <h1 className="text-2xl text-bold">{reviews[0].service.title}</h1>
                    <div className="flex items-center">
                        <img className="w-5 h-5 rounded-full mr-2" 
                            //location of the profile image
                            width={5000} height={5000}
                        />
                        <h2 className="text-lg">{reviews[0].service.provider}</h2>
                    </div>
                </div>
                <div>
                    <h3>Rating</h3>
                    <p>{reviews[0].rating}</p>
                    <input type="range" min="1" max="5" value={rating} onChange={hangleRatingChange}/>
                </div>
                <div>
                    <h3>Review</h3>
                    <p>{reviews[0].review}</p>
                </div>
                <div>
                    <button>
                        send review
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MyReview