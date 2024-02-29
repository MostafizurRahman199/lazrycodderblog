import { NextResponse } from "next/server";
import  {connectMongoDB} from '../../../lib/db'
import BlogModel from '../../../models/blog'
export const POST = async (req) => {
    try {
      // Ensure database connection within the handler
      await connectMongoDB()
  
      const body = await req.json();
      console.log(body);
      // Validate required fields using a validation library (recommended)
      // ... validation logic using yup or similar ...
  
      if (body.title && body.author && body.content) {
        const blog = new BlogModel(body);
        await blog.save();
        return NextResponse.json({ message: "Blog posted successfully" });
      }
  
      return NextResponse.json({ message: "All required fields must be provided" });
    } catch (error) {
      console.error("Error saving message:", error); // Log for debugging
      return NextResponse.json({
        message: "Failed to submit message",
        // Avoid exposing sensitive error details to the user
        error: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      // Close database connection (if applicable)
      // Assuming dbConnect returns a connection object
    }
  };