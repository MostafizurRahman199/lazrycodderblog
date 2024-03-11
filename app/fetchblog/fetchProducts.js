import BlogModel from '../../models/blog';
import { connectMongoDB } from '../../lib/db';
await connectMongoDB();

export default  fetchProducts = async (skip, limit = 3) => {
  try {
    const data = await BlogModel.find()
      .sort({ _id: -1 }) // Ensure latest blogs are fetched first
      .skip(skip)
      .limit(limit)
      .maxTimeMS(30000); // 30 seconds timeout

    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return []; // Handle errors gracefully
  }
};