import dotenv from 'dotenv';
import pkg from 'pg';

const { Client } = pkg;
dotenv.config();

let statePosts = [];
let stateAvatar = []

// запрос к базе данных
const connectDB = async () => {
  try {
    const client = new Client({
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT,
      ssl: true,
    });

    await client.connect();
    const res = await client.query('SELECT * FROM public.last_user_post');
    statePosts = res.rows;
    const resImg = await client.query('SELECT * FROM public.user_avatar');
    stateAvatar = resImg.rows
    await client.end();
  } catch (error) {
    console.log(error);
  }
};

connectDB();

// возвращаю полученные данные
export const getUsersPosts = (req, res) => {
  res.status(200).json(statePosts);
};

export const getUserAvatar = (req, res) => {
  res.status(200).json(stateAvatar);
}
