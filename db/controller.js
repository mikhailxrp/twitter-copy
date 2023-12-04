import pool from './index.js';

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
  const post = await pool.query('DELETE FROM public.posts WHERE post_id=$1', [id]);
  res.status(200).json({ message: 'Пост был удален' });
}
