import { Router } from "express";
import cookieParser from "cookie-parser";
import fs from "fs";

import {
  getUsers,
  getUsersPosts,
  createPost,
  updatePost,
  deletePost,
  createUser,
  isUser,
  feedPage,
  tokenVerification,
  returnMainPage,
} from "../db/controller.js";

const router = Router();
let secret = "qwert";

router.use(cookieParser(secret));

// middleware для добавления пользователя в запрос
router.use(tokenVerification);

router.get("/", (req, res) => {
  if (req.user) {
    feedPage(req, res);
  } else {
    returnMainPage(req, res);
  }
});

// Главная страница для сервера изменил путь с public/index.html на public/main.html
const index = fs.readFileSync("public/index.html", "utf8");

router.get("/app", (req, res) => res.type("html").send(index));

// получаю пользователей
router.get("/api/server/users", getUsers);
// получаю посты пользователей
router.get("/api/server/posts", getUsersPosts);

// Создаю новый пост
router.post("/api/server/newpost", (req, res) => {
  if (req.user) {
    createPost(req, res);
  } else {
    res.json({ error: "Необходимо авторизоваться в приложении.." });
  }
});

// изменяю пост
router.put("/api/server/update/:id", (req, res) => {
  if (req.user) {
    updatePost(req, res);
  } else {
    // вывести окно с предупреждением что нужно авторизоваться
  }
});
// удаляю пост
router.delete("/api/server/delete/:id", (req, res) => {
  if (req.user) {
    deletePost(req, res);
  } else {
    // вывести окно с предупреждением что нужно авторизоваться
  }
});

// Создание нового пользователя
router.post("/api/server/newUser", createUser);

// Логин
router.post("/api/server/login", isUser);

// авторизованный пользователь
router.get("/feed", feedPage);

export default router;
