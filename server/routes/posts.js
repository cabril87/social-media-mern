import express from 'express';
import { createPost, updatePost, deletePost, likeDislikePost, getPost, getTimeline, getAllPost } from '../controllers/posts'

const router = express.Router();


router.post("/", createPost)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)
router.put("/:id/like", likeDislikePost);
router.get("/:id", getPost);
router.get("/timeline/:userId", getTimeline);
router.get("/profile/:username", getAllPost);

export default router