import express from 'express';
import {  loginGet, loginPost, logout, registerPost } from '../controllers/auths';

const router = express.Router();

// router.get("/register", registerGet);
router.post("/register", registerPost);
router.get("/login", loginGet)
router.post("/login", loginPost)
router.post("/logout", logout)

export default router