import {Router} from 'express';
import { createBlog, getAllBlogs, getOneBlog, deleteBlog, updateBlog } from '../controllers/blog.controller.js';

const router = Router();

router.route('/blogs')
    .get(getAllBlogs)
    .post(createBlog)

router.route('/blogs/:id')
    .get(getOneBlog)
    .delete(deleteBlog)
    .patch(updateBlog)

export default router;