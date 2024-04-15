'use server'

import { connectToDatabase } from '@/lib/database'
import Service from '@/lib/database/models/service.model'
import User from '@/lib/database/models/user.model'
import Category from '@/lib/database/models/category.model'
import { handleError } from '@/lib/utils'

import { GetReviewsByServiceParams } from '@/types'

export async function getReviewsByService({ serviceId, limit, page }: GetReviewsByServiceParams) {
//   try {
//     await connectToDatabase()
    return [];
}