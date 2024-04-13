import pool from './index.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import fs from 'fs';

import isValidEmail from '../public/assets/email_is_valid.js';

// возвращаю полученные данные
export async function getUsers(req, res) {
  const users = await pool.query('SELECT * FROM public.users');
  res.status(200).json(users.rows);
}

export async function getUsersPosts(req, res) {
  const posts = await pool.query('SELECT * FROM public.posts');
  res.status(200).json(posts.rows);
}

// save settings user
export async function saveSettigsUser(req, res) {
  const {
    date_of_birth,
    id,
    user_about,
    user_avatar,
    user_email,
    user_lastname,
    user_location,
    user_name,
    user_nikname,
    user_password,
    user_site,
  } = req.body;
  const user = await pool.query(
    'UPDATE public.users set date_of_birth=$1, user_about=$2, user_avatar=$3, user_location=$4, user_name=$5, user_nikname=$6, user_site=$7 WHERE id=$8 RETURNING *',
    [
      date_of_birth,
      user_about,
      user_avatar,
      user_location,
      user_name,
      user_nikname,
      user_site,
      id,
    ]
  );

  res.send({ user: req.body });
}

// save  changePassword
export async function savePassword(req, res) {
  const { password, currentPass, newPass, repeatNewPass, id } = req.body;

  if (password !== '') {
    const validationPassword = bcrypt.compareSync(password, currentPass);

    if (!validationPassword) {
      return res.status(400).json({ error: 'Не верный пароль' });
    } else if (
      newPass !== repeatNewPass ||
      newPass === '' ||
      repeatNewPass === ''
    ) {
      return res.status(400).json({ error: 'Пароли не совпадают' });
    }

    let passwordHash = bcrypt.hashSync(newPass, 10);
    await pool.query(
      'UPDATE public.users set user_password=$1 WHERE id=$2 RETURNING *',
      [passwordHash, id]
    );

    res.status(200).json({ message: 'OK' });
  } else {
    return res.status(400).json({ error: 'Поле не может быть пустым' });
  }
}

// save changeEmail
export async function saveChangeEmail(req, res) {
  const { email, password, currentPass, id } = req.body;

  const validationPassword = bcrypt.compareSync(password, currentPass);

  const isEmail = isValidEmail(email);

  if (!isEmail) {
    return res.status(400).json({ error: 'Введите правильный email' });
  } else if (!validationPassword || password === '') {
    return res.status(400).json({ error: 'Не верный пароль' });
  } else {
    await pool.query(
      'UPDATE public.users set user_email=$1 WHERE id=$2 RETURNING *',
      [email, id]
    );
    res.status(200).json({ message: 'OK' });
  }
}

export async function createPost(req, res) {
  const userId = req.cookies.id;
  const postTime = new Date();
  const postId = new Date().getTime();
  const { message, image } = req.body;

  const post = await pool.query(
    'INSERT INTO public.posts (post_id, post_time, post_text, user_id, post_image) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [postId, postTime, message, userId, image]
  );

  res.status(200).json({ status: 200 });
}

export async function updatePost(req, res) {
  const { post_text, post_image } = req.body;
  const id = req.params.id;
  const post = await pool.query(
    'UPDATE public.posts set post_text=$1, post_image=$2 WHERE post_id=$3 RETURNING *',
    [post_text, post_image, id]
  );
  res.status(200).json(post.rows[0]);
}

export async function deletePost(req, res) {
  const id = req.params.id;
  await pool.query('DELETE FROM public.posts WHERE post_id=$1', [id]);
  res.status(200).json({ message: 'Пост был удален' });
}

// Новый пользователь
async function newUser(user) {
  const {
    user_name,
    user_lastname,
    user_nikname,
    user_email,
    user_password,
    id,
  } = user;
  // шифрование пароля
  let userPassword = bcrypt.hashSync(user_password, 10);
  await pool.query(
    'INSERT INTO public.users(user_name, user_lastname, user_nikname, user_email, user_password, id) VALUES ($1, $2, $3, $4, $5, $6)',
    [user_name, user_lastname, user_nikname, user_email, userPassword, id]
  );
}

export async function createUser(req, res) {
  let text = null;
  let status = null;
  let name;
  let email;
  let state;

  let userEmail = await pool.query(
    'SELECT user_email FROM public.users WHERE user_email=$1',
    [req.body.user_email]
  );
  let userName = await pool.query(
    'SELECT user_name FROM public.users WHERE user_name=$1',
    [req.body.user_name]
  );

  if (userName.rows.length !== 0) {
    text = 'Пользователь с таким именем зарегистрирован';
    status = 400;
    state = false;
    name = text;
  } else if (userEmail.rows.length !== 0) {
    text = 'Пользователь с таким email зарегистрирован';
    status = 400;
    state = false;
    email = text;
  } else {
    state = true;
  }

  if (state) {
    newUser(req.body);
    text = 'Пользователь зарегистрирован';
    status = 200;
  }

  res.status(status).json({ email: email, name: name, status: status });
}

// login user
export async function isUser(req, res) {
  let status;
  let message;
  let state;
  let authToken;
  let date;

  const { user_email, user_password } = req.body;

  let user = await pool.query(
    'SELECT * FROM public.users WHERE user_email=$1',
    [user_email]
  );

  if (user.rows.length === 0) {
    status = 401;
    message = 'Пользователь с таким email не найден';
    state = false;
  } else if (!bcrypt.compareSync(user_password, user.rows[0].user_password)) {
    status = 400;
    message = 'Пароли не совпадают';
    state = false;
  } else {
    state = true;
  }

  if (state) {
    status = 200;
    message = 'OK';
    authToken = crypto.randomUUID();
    date = new Date();

    await pool.query(
      'INSERT INTO public.session(auth_token, user_id, date_token) VALUES ($1, $2, $3)',
      [authToken, user.rows[0].id, date]
    );

    res.cookie('token', authToken, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    res.cookie('id', user.rows[0].id, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
  }

  res.status(status).json({ status: status, message: message });
}

export async function getUser(req, res) {
  const token = req.user;
  const authId = await pool.query(
    'SELECT * FROM public.session WHERE auth_token=$1',
    [token]
  );
  const user = await pool.query('SELECT * FROM public.users WHERE id=$1', [
    authId.rows[0].user_id,
  ]);

  res.json({ user: user.rows[0] });
}

// Страница пользователя если авторизован попадаем сюда название index.html это для фронта на React потому как React по умолчанию впапке public ищет файл с названием index.html для поэтому гдавная страница это main.html? вся остальная навигация по страницам во фронт части приложения будет происходит во внутренних роутах фронт части приложения.
const feed = fs.readFileSync('public/index.html', 'utf8');
// Страницы главная есди пользователь не авторизован попадем сюда
const html = fs.readFileSync('public/main.html', 'utf8');

// Проверка токена и добавление пользователя в запрос
export function tokenVerification(req, res, next) {
  const authToken = req.cookies.token;

  req.user = authToken;
  next();
}

export function returnMainPage(req, res) {
  res.type('html').send(html);
}

// authorization_check проверка авторизации пользователя
export async function feedPage(req, res) {
  if (req.user) {
    const userId = req.cookies.id;
    // текущая сессия пользователя
    const userSession = await pool.query(
      'SELECT * FROM public.session WHERE user_id=$1 AND auth_token=$2',
      [userId, req.user]
    );

    if (userSession.rows.length !== 0) {
      let currentDate = new Date().getTime();

      // дата создания токена
      let createTokenDate = userSession.rows[0].date_token.getTime();

      // время жизни текущего токена
      let resultDate = currentDate - createTokenDate;
      resultDate = Math.floor((resultDate / (1000 * 60 * 60 * 24)) % 30);

      // если токен не просрочен
      if (resultDate <= 7) {
        res.type('html').send(feed);
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    returnMainPage(req, res);
  }
}
