import {model, Schema} from 'mongoose';

const BlogSchema = new Schema(
    {
        title: String,
        content: String,
        readTime: Number, //We need the word count to pass into a function and calculate the average read time.
        description: String,
        author: String,
        date: {type: Date, default: Date.now}
    },

    {timestamps:true}
);

const Blog = model("Store", BlogSchema)
export default Blog;
