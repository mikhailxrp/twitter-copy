import pool from './index.js';
import bcrypt from 'bcrypt';

// возвращаю полученные данные
export async function getUsers(req, res) {
  const users = await pool.query('SELECT * FROM public.users');
  res.status(200).json(users.rows);
}

export async function getUserAvatar(req, res) {
  const avatars = await pool.query('SELECT * FROM public.user_avatar');
  res.status(200).json(avatars.rows);
}

export async function getUsersPosts(req, res) {
  const posts = await pool.query('SELECT * FROM public.posts');
  res.status(200).json(posts.rows);
}

export async function createPost(req, res) {
  const { post_id, post_time, post_text, user_id } = req.body;
  const post = await pool.query(
    'INSERT INTO public.posts (post_id, post_time, post_text, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
    [post_id, post_time, post_text, user_id]
  );
  res.status(200).json(post.rows);
}

export async function updatePost(req, res) {
  const { post_text, post_image } = req.body;
  const id = req.params.id;
  const post = await pool.query('UPDATE public.posts set post_text=$1, post_image=$2 WHERE post_id=$3 RETURNING *', [
    post_text,
    post_image,
    id,
  ]);
  res.status(200).json(post.rows[0]);
}

export async function deletePost(req, res) {
  const id = req.params.id;
  await pool.query('DELETE FROM public.posts WHERE post_id=$1', [id]);
  res.status(200).json({ message: 'Пост был удален' });
}

// Новый пользователь
async function newUser(user) {
  const { user_name, user_lastname, user_nikname, user_email, user_password, id } = user;
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
  const userData = await pool.query('SELECT user_name, user_email FROM public.users');

  for (let user of userData.rows) {
    if (user.user_name === req.body.user_name) {
      text = 'Пользователь с таким именем зарегистрирован';
      status = 400;
      state = false;
      name = text;
    } else if (user.user_email === req.body.user_email) {
      text = 'Пользователь с таким email зарегистрирован';
      status = 400;
      state = false;
      email = text;
    } else {
      state = true;
    }
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
  const { user_email, user_password } = req.body;

  const users = await pool.query('SELECT * FROM public.users');

  for (let userItem of users.rows) {

    if (userItem.user_email !== user_email) {
      status = 401;
      message = 'Пользователь с таким email не найден';
      state = false;
    } else if(!bcrypt.compareSync(user_password, userItem.user_password)){
      status = 400
      message = 'Пароли не совпадают'
      state = false
    }else{
      state = true;
    }
  }

  if (state) {
    status = 200;
    message = 'OK';
  }

  res.status(status).json({ status: status, message: message });
}
