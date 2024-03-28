export const serviceDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}

export const reviewDefaultValues = {
  rating: 1,
  review: '',
}

export const categories = [
  "Recommendations",
  "Home",
  "Personal",
  "Tech",
  "Advisory",
  "Creative",
  "Logistic",
  "Collab",
  "Health",
];

// Filter Button
export const initialFilterSettings = {
  rating: 3,
  category: 'All',
  distance: 20
}

export const ratings = [
  { value: 1, label: '1⭐' },
  { value: 2, label: '2⭐' },
  { value: 3, label: '3⭐' },
  { value: 4, label: '4⭐' },
  { value: 5, label: '5⭐' }
];

export const filterCategories = ['All', 'Home & Repair', 'Personal', 'Technical', 'Professional', 'Creative', 'Logistic', 'Collaboratory'];

export const distances = [
  { value: 10, label: '10km' },
  { value: 20, label: '20km' },
  { value: 30, label: '30km' },
  { value: 40, label: '40km' },
  { value: 50, label: '50km' }
];