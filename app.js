import express from 'express';
import fs from 'fs';
import serverRouters from './routers/server.js';
import cookieParser from 'cookie-parser';
import pool from './db/index.js';

const app = express();
const port = 3000;
const html = fs.readFileSync('public/main.html', 'utf8');
const feed = fs.readFileSync('public/feed.html', 'utf8');

let secret = 'qwert';

app.use(express.json());
app.use(serverRouters);
app.use(cookieParser(secret));
app.use(express.static('public'));

// middleware для того чтобы пользователь был в запросе
app.use((req, res, next) => {
  const authToken = req.cookies.token;
  req.user = authToken;
  next();
});


// authorization_check
async function authCheck(req, res){
  if(req.user){
    const userId = req.cookies.id;
    // текущая сессия пользователя
    const userSession = await pool.query('SELECT * FROM public.session WHERE user_id=$1 AND auth_token=$2', [
      userId,
      req.user,
    ]);

    if(userSession.rows.length !== 0){
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
        res.type('html').send(html);
      }
    }else{
      res.type('html').send(html);
    }

  }else{
    res.type('html').send(html);
  }
  
}

app.get('/feed', (req, res) => {
  authCheck(req, res)
});

app.get('/', (req, res) => {
  authCheck(req, res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
