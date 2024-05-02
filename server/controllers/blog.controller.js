import Blog from "../models/blog.model.js";

async function getAllBlogs(req, res) {
  try {
    const allBlogs = await Blog.find();
    res.json(allBlogs);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getOneBlog(req, res) {
  try {
    const oneBlog = await Blog.findById(req.params.id);
    res.json(oneBlog);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function createBlog(req, res) {
  try {
    const newBlog = new Blog(req.body);
    const blog = await newBlog.save();
    res.json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteBlog(req, res) {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    res.json(deletedBlog);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function updateBlog(req, res) {
  const options = {
    new: true,
    runValidators: true,
  };
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      options
    );
    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json(err);
  }
}

export { getAllBlogs, getOneBlog, createBlog, updateBlog, deleteBlog };
