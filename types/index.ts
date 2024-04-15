// ====== DUMMY PARAMS
export type DummyUser = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  serviceIDs: string[];
  reviewIDs: string[];
  website: string;
  location: string;
  contactNumber: string;
};

// ====== USER PARAMS
export type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
};

export type UpdateUserParams = {
  firstName?: string;
  lastName?: string;
  username?: string;
  imageUrl?: string;
  website?: string;
  location?: string;
};


// ====== SERVICE PARAMS
export type CreateServiceParams = {
  userId: string
  service: {
    title: string
    description: string
    location: string
    imageUrl: string
    categoryId: string
    servicesOffered: Array<ServiceItem>
    url: string
  }
  path: string
}

export type UpdateServiceParams = {
  userId: string
  service: {
    _id: string
    title: string
    imageUrl: string
    description: string
    location: string
    startDateTime: Date
    endDateTime: Date
    categoryId: string
    price: string
    isFree: boolean
    url: string
  }
  path: string
}

export type DeleteServiceParams = {
  serviceId: string
  path: string
}

export type GetAllServicesParams = {
  query: string
  category: string
  limit: number
  page: number
}

export type GetServicesByUserParams = {
  userId: string
  limit?: number
  page: number
}

export type GetRelatedServicesByCategoryParams = {
  categoryId: string
  serviceId: string
  limit?: number
  page: number | string
}

export type Service = {
  _id: string
  title: string
  description: string
  price: string
  isFree: boolean
  imageUrl: string
  location: string
  startDateTime: Date
  endDateTime: Date
  url: string
  organizer: {
    _id: string
    firstName: string
    lastName: string
  }
  category: {
    _id: string
    name: string
  }
}

export type ServiceItem = {
  id: string
  title: string
  description: string
  price: string
}

// ====== CATEGORY PARAMS
export type CreateCategoryParams = {
  categoryName: string
}

// ====== RESERVATION PARAMS
export type CheckoutReservationParams = {
  serviceTitle: string
  serviceId: string
  price: string
  isFree: boolean
  clientId: string
}

export type CreateReservationParams = {
  userId: string
  serviceId: string
  reservation: {
    // stripeId: string
    providerId: string
    serviceId: string
    // totalAmount: string
    createdAt: Date
    selectedServices: string[]
  }
  path: string
}

export type GetReservationsByServiceParams = {
  serviceId: string
  searchString: string
}

export type GetReservationsByUserParams = {
  userId: string | null
  limit?: number
  page: string | number | null
}

// ====== REVIEW PARAMS
export type GetReviewsByServiceParams = {
  serviceId: string
  limit?: number
  page: number
}


// ====== Url QUERY PARAMS
export type UrlQueryParams = {
  params: string
  key: string
  value: string | null
}

export type RemoveUrlQueryParams = {
  params: string
  keysToRemove: string[]
}

export type SearchParamProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
