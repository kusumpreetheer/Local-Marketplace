import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// Check if the connection to the database is already  
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  // If the connection is already cached, use it
  if (cached.conn) return cached.conn;

  // If the connection is not already cached, create a new connection
  if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  // Create a new connection
  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'local marketplace',
    bufferCommands: false,
  })

  // Cache the connection
  cached.conn = await cached.promise;

  return cached.conn;
}