import express from 'express';
import fs from 'fs';
import serverRouters from './routers/server.js';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3000;
const html = fs.readFileSync('public/main.html', 'utf8');
const feed = fs.readFileSync('public/feed.html', 'utf8')
let secret = 'qwert';

app.use(express.json());
app.use(serverRouters);
app.use(cookieParser(secret));
app.use(express.static('public'));

app.get('/api/server/feed', (req, res) => {
  console.log(req.cookies);
  res.type('html').send(feed);
});


app.get('/', (req, res) => res.type('html').send(html));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
