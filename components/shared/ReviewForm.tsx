"use client"

import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import dummmyRatingReviews from "@/constants/dummyReviews";
import dummyUsers from "@/constants/dummyUsers";
import { IRatingReview } from '@/lib/database/models/ratingReview.model';
import { reviewDefaultValues } from '@/constants';
import { useRouter } from 'next/navigation';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { reviewFormSchema } from '@/lib/validator';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

type ReviewFormProps = {
    userId: string
    type: "Create" | "Edit"
    review?: IRatingReview,
    reviewId?: string
}

const ReviewForm = ({ userId, type, review, reviewId }: ReviewFormProps) => {

    const initialValues = review && type === 'Edit'
        ? { ...review }
        : reviewDefaultValues;

    const router = useRouter();

    // form setup with react-hook-form and zod
    const form = useForm<z.infer<typeof reviewFormSchema>>({
        resolver: zodResolver(reviewFormSchema),
        defaultValues: {
            ...initialValues,
        }
    })

    // submit form
    async function onSubmit(values: z.infer<typeof reviewFormSchema>) {

        if (type === 'Create') {
            // try {
            //   const newService = await createService({
            //     service: { ...values, imageUrl: uploadedImageUrl },
            //     userId,
            //     path: '/profile'
            //   })

            //   if(newService) {
            //     form.reset();
            //     router.push(`/services/${newService._id}`)
            //   }
            console.log('Create service');

            // } catch (error) {
            //   console.log(error);
            // }
        }

        if (type === 'Edit') {
            if (!reviewId) {
                router.back()
                return;
            }

            try {
                console.log('Edit review');

                // const editedReview = await editReview({
                //   userId,
                //   review: { ...values, imageUrl: uploadedImageUrl, _id: reviewId },
                //   path: `/reviews/${reviewId}`
                // })

                // if(editedReview) {
                //   form.reset();
                //   router.push(`/services/${editedReview._id}`)
                // }
            } catch (error) {
                console.log(error);
            }
        }
    }

    const user = dummyUsers[0];
    const reviews = dummmyRatingReviews.filter(review => review.clientID === user._id);

    // State for editable ratings
    const [rating, setRating] = useState(reviews[0]?.rating);

    const handleRatingChange = (event: Event, newValue: number | number[]) => {
        setRating(newValue as number);
    };

    const [reviewText, setReviewText] = useState(reviews[0]?.review);

    // Marks for the rating slider
    const marks = [
        { value: 1, label: '1⭐' },
        { value: 2, label: '2⭐' },
        { value: 3, label: '3⭐' },
        { value: 4, label: '4⭐' },
        { value: 5, label: '5⭐' }
    ];

    return (

        <div className="mx-6">

            {/* Service Image */}
            <div className="border border-gray-200 rounded-lg overflow-hidden h-[210px] relative">
                <img className="w-full h-full object-cover" src={reviews[0]?.service.imageUrl ?? ''} alt={reviews[0]?.service.imageUrl ?? ''} />
            </div>

            {/* Service Title and Provider */}
            <div className="my-4">
                {/* Link to the service page */}
                <h1 className="text-2xl font-bold">{reviews[0]?.service.title}</h1>
                <div className="flex items-center">
                    <img className="w-5 h-5 rounded-full mr-2" src={user.imageUrl} alt="Profile" />
                    <h2 className="text-lg">{reviews[0]?.service.provider}</h2>
                </div>
            </div>

            {/* The form */}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">

                    {/* Rating Slider */}
                    <div>
                        <h3 className="font-medium pb-3">Rating</h3>
                        {/* Display current rating */}
                        <p>{rating}</p>
                        {/* Slider for editing rating */}
                        <div className="mx-2">

                            <FormField
                                control={form.control}
                                name="rating"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl className="h-72">
                                            <Slider
                                                aria-label="Custom marks"
                                                defaultValue={reviews[0]?.rating}
                                                value={rating}
                                                onChange={handleRatingChange}
                                                step={1}
                                                valueLabelDisplay="auto"
                                                marks={marks}
                                                min={1}
                                                max={5}
                                                sx={{
                                                    color: 'black', // Set the color to black
                                                    '& .MuiSlider-track': {
                                                        color: 'black', // Set the track color to black
                                                    },
                                                    '& .MuiSlider-rail': {
                                                        color: 'black', // Set the rail color to black
                                                    },
                                                    '& .MuiSlider-thumb': {
                                                        color: 'black', // Set the thumb color to black
                                                    },
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>



                    {/* Review */}
                    <div>
                        <h3 className="font-medium pb-3">Review</h3>
                        <FormField
                            control={form.control}
                            name="review"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl className="h-72">
                                        <Textarea
                                            placeholder="Review"
                                            {...field}
                                            className="w-full h-40 px-4 py-2 border border-gray-300 rounded-md resize-none" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        size="lg"
                        disabled={form.formState.isSubmitting}
                        className="button col-span-2 w-full"
                    >
                        {form.formState.isSubmitting ? (
                            'Submitting...'
                        ) : `${type} `}</Button>
                </form>
            </Form>

            {/* Edit review Button */}
            <div className="flex justify-center items-center mt-2 mb-5">
                <button className="px-4 py-4 border border-black rounded-md bg-black text-white w-full">
                    Edit Review
                </button>
            </div>
        </div>
    )
}

export default ReviewForm