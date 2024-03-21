'use server'

import { revalidatePath } from 'next/cache'

import { connectToDatabase } from '@/lib/database'
import Service from '@/lib/database/models/service.model'
import User from '@/lib/database/models/user.model'
// import Category from '@/lib/database/models/category.model'
import { handleError } from '@/lib/utils'

import {
  CreateServiceParams,
  UpdateServiceParams,
  DeleteServiceParams,
  GetAllServicesParams,
  GetServicesByUserParams,
  GetRelatedServicesByCategoryParams,
} from '@/types'

export async function createService(service: CreateServiceParams) {
  try {
    await connectToDatabase()

    const newService = await Service.create(service)
    return JSON.parse(JSON.stringify(newService))
  } catch (error) {
    handleError(error)
  }
}
