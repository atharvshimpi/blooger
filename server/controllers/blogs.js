import express from 'express';
import mongoose from 'mongoose';

import BlogMessage from '../models/blogMessage.js';

const router = express.Router();

export const getBlogs = async (req, res) => { 
    try {
        const blogMessages = await BlogMessage.find().sort({ _id: -1 });
                
        res.status(200).json(blogMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getBlog = async (req, res) => { 
    const { id } = req.params;

    try {
        const blog = await BlogMessage.findById(id);
        
        res.status(200).json(blog);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createBlog = async (req, res) => {
    const blog = req.body;

    const newBlogMessage = new BlogMessage({ ...blog, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newBlogMessage.save();

        res.status(201).json(newBlogMessage);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const updateBlog = async (req, res) => {
    const { id } = req.params;
    const { creator, title, description, selectedFile, genre } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`);

    const updatedBlog = { creator, title, description, selectedFile, genre, _id: id };

    await BlogMessage.findByIdAndUpdate(id, updatedBlog, { new: true });

    res.json(updatedBlog);
}

export const deleteBlog = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`);

    await BlogMessage.findByIdAndRemove(id);

    res.json({ message: "Blog deleted successfully." });
}

export const likeBlog = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`);
    
    const blog = await BlogMessage.findById(id);

    const updatedBlog = await BlogMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedBlog);
}


export default router;