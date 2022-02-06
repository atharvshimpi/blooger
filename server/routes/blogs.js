import express from "express"

import { getBlogs, createBlog, updateBlog, likeBlog, deleteBlog } from "../controllers/blogs.js"
import auth from "../middleware/auth.js"

const router = express.Router();

router.get('/', getBlogs);
router.post('/', auth, createBlog);
router.patch('/:id', auth, updateBlog);
router.delete('/:id', auth, deleteBlog);
router.patch('/:id/likeBlog', auth, likeBlog);

export default router;