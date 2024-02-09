import PostModel from "../models/postModel.js"
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
    try {
        const postModels = await PostModel.find();

        console.log(postModels)

        res.status(200).json(postModels);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;

    const newPost = new PostModel(post)

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updatePosts = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await PostModel.findByIdAndUpdate(_id, {...post, _id}, { new: true })

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id');

    await PostModel.findByIdAndDelete(id);

    res.json({message: 'post deleted successfully' });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id');

    const post = await PostModel.findById(id);

    const updatedPost = await PostModel.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true})

    res.json(updatedPost)
}