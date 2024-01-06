import { Router } from 'express';
import {
  getUsers,
  getUserAvatar,
  getUsersPosts,
  createPost,
  updatePost,
  deletePost,
  createUser,
  isUser
} from '../db/controller.js';

const router = Router();

// получаю пользователей
router.get('/api/server/users', getUsers);
// получаю аватары пользователей
router.get('/api/server/avatar', getUserAvatar);
// получаю посты пользователей
router.get('/api/server/posts', getUsersPosts);
// Создаю новый пост
router.post('/api/server/newpost', createPost);
// изменяю пост
router.put('/api/server/update/:id', updatePost);
// удаляю пост
router.delete('/api/server/delete/:id', deletePost);

// Создание нового пользователя
router.post('/api/server/newUser', createUser);
// Логин
router.post('/api/server/login', isUser)


export default router;
