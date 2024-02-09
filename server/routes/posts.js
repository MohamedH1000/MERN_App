import express from 'express';
import { getPosts, createPosts, updatePosts, deletePost, likePost } from '../controllers/post.js';

const router = express.Router()
// localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPosts);
router.put('/:id', updatePosts);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;