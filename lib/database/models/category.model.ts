import { Document, Schema, model, models } from "mongoose";

export interface ICategory extends Document {
  name: string;
  description?: string;
  parentCategoryId?: Schema.Types.ObjectId;
  path?: string; // Materialized path for hierarchical queries
  ancestors?: Schema.Types.ObjectId[]; // Direct access to all ancestors
}

const CategorySchema = new Schema<ICategory>({
  name: { type: String, required: true, unique: true },
  description: String,
  parentCategoryId: { type: Schema.Types.ObjectId, ref: 'Category', default: null },
  path: { type: String, index: true }, // Materialized path, indexed for performance
  ancestors: [{ type: Schema.Types.ObjectId, ref: 'Category' }], // An array of ancestor IDs
}, { timestamps: true });

// Virtual for children - dynamically fetch child categories
CategorySchema.virtual('children', {
  ref: 'Category',
  localField: '_id',
  foreignField: 'parentCategoryId',
});

// Middleware to automatically update the materialized path and ancestors array
CategorySchema.pre<ICategory>('save', async function(next) {
  if (this.isModified('parentCategoryId')) {
    const parent = this.parentCategoryId ? await Category.findById(this.parentCategoryId) : null;
    this.path = parent ? `${parent.path}${parent._id}/` : '/';
    this.ancestors = parent ? [...parent.ancestors, parent._id] : [];
  }
  next();
});

const Category = models.Category || model<ICategory>('Category', CategorySchema);

// Define a TypeScript type for category items, which might be used for API responses or client-side interactions
export type CategoryItem = {
  _id: string;
  name: string;
  description?: string;
  parentCategoryId?: string;
  path?: string;
  ancestors?: string[];
  children?: CategoryItem[]; // Optional field for child categories, useful in frontend applications or hierarchical data displays
};

export default Category;
