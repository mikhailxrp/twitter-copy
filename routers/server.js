import { Router } from "express";
import { getUsersPosts, getUserAvatar } from '../db/index.js';

const router = Router()

router.get('/posts/server', getUsersPosts);
router.get('/avatar/server', getUserAvatar)


export default router