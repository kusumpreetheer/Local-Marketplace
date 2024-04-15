import * as z from "zod"

export const serviceItemSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
  price: z.string().min(0, 'Price must be at least 0').max(400, 'Price must be less than 400 characters'),
})

export const serviceFormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(0, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
  location: z.string().min(3, 'Location must be at least 3 characters').max(400, 'Location must be less than 400 characters'),
  imageUrl: z.union([z.string().url(), z.literal("")]),
  categoryId: z.string().min(1, 'Category is required'),
  url: z.union([z.string().url(), z.literal("")]),
  // servicesOffered: z.array(serviceItemSchema).min(1, 'At least one service item is required'),
})

export const reviewFormSchema = z.object({
  rating: z.number().min(1, 'Rating must be at least 1').max(5, 'Rating must be at most 5'),
  review: z.string().min(0, 'Review must be at least 0 characters').max(400, 'Review must be less than 400 characters'),
})