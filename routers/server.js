import { Router } from 'express';
import cookieParser from 'cookie-parser';

import {
  getUsers,
  getUserAvatar,
  getUsersPosts,
  createPost,
  updatePost,
  deletePost,
  createUser,
  isUser,
  authCheck,
  tokenVerification
} from '../db/controller.js';

const router = Router();
let secret = 'qwert';

router.use(cookieParser(secret));

// middleware для добавления пользователя в запрос
router.use(tokenVerification);

router.get('/', authCheck);

// получаю пользователей
router.get('/api/server/users', getUsers);
// получаю посты пользователей
router.get('/api/server/posts', getUsersPosts);

// Создаю новый пост
router.post('/api/server/newpost', (req, res) => {
  if(req.user){
    createPost(req, res)
  }else{
    // вывести окно с предупреждением что нужно авторизоваться
  }
});
// изменяю пост
router.put('/api/server/update/:id', (req, res) => {
  if(req.user){
    updatePost(req, res)
  }else{
    // вывести окно с предупреждением что нужно авторизоваться
  }
});
// удаляю пост
router.delete('/api/server/delete/:id', (req, res) => {
  if(req.user){
    deletePost(req, res)
  }else{
    // вывести окно с предупреждением что нужно авторизоваться
  }
});

// Создание нового пользователя
router.post('/api/server/newUser', createUser);

// Логин
router.post('/api/server/login', isUser)

// авторизованный пользователь
router.get('/feed', authCheck)


export default router;
