import { Router } from "express";
import { getUsers, getUserAvatar, getUsersPosts, createPost, updatePost, deletePost } from '../db/controller.js';

const router = Router()

// получаю пользователей
router.get('/api/server/users', getUsers);
// получаю аватары пользователей
router.get('/api/server/avatar', getUserAvatar);
// получаю посты пользователей
router.get('/api/server/posts', getUsersPosts)
// Создаю новый пост
router.post('/api/server/newpost', createPost);
// изменяю пост
router.put('/api/server/update/:id', updatePost);
// удаляю пост
router.delete('/api/server/delete/:id', deletePost);


export default router