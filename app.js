import express from "express";
import fs from 'fs';
import serverRouters from './routers/server.js'


const app = express()
const port = 3000

app.use(express.json())
app.use(serverRouters);


const html = fs.readFileSync('public/main.html', 'utf8');

app.use(express.static('public'));
app.get('/', (req, res) => res.type('html').send(html));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})