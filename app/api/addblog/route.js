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



  //post

  export const PUT = async (req) => {
    try {
      console.log('stay here - 1');
      const body = await req.json(); // Assuming Next.js API route with body parsing
      
      // Validate required fields and data types (adapt based on your validation requirements)
      if (!body.title && !body.author && !body.content) {
        return NextResponse.json({ message: "Missing required fields" });
      }
  
      // Update product using appropriate method (adjust based on your database and model)
      
      const updatedBlog = await BlogModel.findByIdAndUpdate(
        body.id,
        {
          $set: {
            title: body.title,
            content: body.content,
            author: body.author,
            // Update other fields as needed
          },
        },
        { new: true } // Return the updated document
      );

 
  
      if (!updatedBlog) {
        return NextResponse.json({ message: "Blog not found" });
      }
  
      return NextResponse.json({ message: "Blog updated successfully", product: updatedBlog });
    } catch (error) {
      console.error("Error updating product:", error);
      return NextResponse.json({ message: "An error occurred", error: error.message });
    }
  };



  export const DELETE = async (req) => {
    try {
      const body = await req.json();
  
      // Validate the presence of 'id' in the request body
      if (!body.id) {
        return NextResponse.json({
          message: "'id' field is required in the request body.",
          error: "Product deletion failed due to missing ID.",
        });
      }
  
      // Perform deletion using 'findOneAndDelete' for atomic operation
      const deletedProduct = await BlogModel.findOneAndDelete({ _id: body.id });
  
      // Handle cases where no product is found
      if (!deletedProduct) {
        return NextResponse.json({
          message: "Product with the provided ID does not exist.",
          error: "Product deletion failed: ID not found.",
        });
      }
  
      // Return a more informative success message
      return NextResponse.json({
        message: `Product with ID: ${deletedProduct._id} successfully deleted.`,
      });
    } catch (error) {
      // Log the error for detailed debugging
      console.error("Error during product deletion:", error);
  
      // Return a generic error message for the client
      return NextResponse.json({
        message: "An error occurred while deleting the product.",
        error: "Please check the server logs for details.",
      });
    }
  };
  