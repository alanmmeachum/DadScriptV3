import { model, Schema } from "mongoose";

const date = new Date();

const BlogSchema = new Schema(
  {
    title: String,
    content: String,
    readTime: Number, //We need the word count to pass into a function and calculate the average read time.
    description: String,
    author: String,
    date: { type: String, default: date.toLocaleDateString() },
  },

  { timestamps: true }
);

const Blog = model("Blogs", BlogSchema);
export default Blog;
