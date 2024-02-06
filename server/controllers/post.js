import PostModel from "../models/postModel.js"

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
