import postTime from '../post_time.js';
export default function () {
  getMessage();
}

<<<<<<< HEAD
=======
function gettingDataMessage() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      fetch('/data.json').then((result) => {
        resolve(result.json());
      });
    }, 3000);
  });
}

function gettingDataImage() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      fetch('/JSON/pictures.json').then((result) => {
        resolve(result.json());
      });
    }, 3000);
  });
}

let now = new Date();

function updateDate() {
  now = new Date();
}
setInterval(updateDate, 60000);

>>>>>>> main
async function getMessage() {
  // посты
  const result = await fetch('/posts/server');
  const usersPosts = await result.json();

  // картинки
  const resultAvatar = await fetch('/avatar/server');
  const userAvatar = await resultAvatar.json();

  const preloader = document.getElementById('preloader');
  const dataPost = document.getElementById('dataPost');

  for (let userItem of usersPosts) {
    let user = {};
    let avatar = userAvatar.find((item) => {
      if (item.id === userItem.id) {
        return item;
      }
    });
    user.id = userItem.id;
    user.avatar = avatar.avatar;
    user.name = userItem.user_name;
    user.nikName = userItem.nik_name;
    user.text = userItem.text_message;
    user.pictures = userItem.user_image;
    user.postTime = userItem.post_time;
    renderMessage(user);
  }
  preloader.style.display = 'none';
  dataPost.style.display = 'block';
}

// расчет времени поста
function getTimePost(date) {
<<<<<<< HEAD
  let now = Date.now();
  let messageDate = new Date(date).getTime();
=======
  let now = Date.now()
  console.log('now: ', now);
  let messageDate = new Date(date).getTime()
  console.log('messageDate: ', messageDate);
>>>>>>> main

  let newTime = now - messageDate;
  let timeMessage = newTime / (1000 * 60);
  return timeMessage;
}

function renderMessage(user) {
  let timeMessage = getTimePost(user.postTime);
  let userPostTime = postTime(timeMessage);

  const markup = `
                  <div class="message-item">
                    <div class="message-img">
                      <img src="${user.avatar}" alt="" />
                    </div>
                    <div class="message-content">
                      <div class="message-content-top">
                        <div class="message-header">
                          <div class="message-content-title">${user.name}</div>
                          <div class="message-name">${user.nikName}</div>
                        </div>
                        <div class="message-time">${userPostTime}</div>
                      </div>
                      <p class="message-text">
                        ${user.text}
                      </p>
                      <div class="message-content-img">
                        <img src="${user.pictures}" alt="" />
                      </div>
                      <div class="message-content-footer">
                        <div class="message-footer-item">
                          <div><img src="./img/first_page/back.svg" alt="" /></div>
                          <p>21</p>
                        </div>
                        <div class="message-footer-item">
                          <div><img src="./img/first_page/heart.svg" alt="" /></div>
                          <p>23</p>
                        </div>
                        <div class="message-footer-item">
                          <div><img src="./img/first_page/export.svg" alt="" /></div>
                          <p>9</p>
                        </div>
                      </div>
                    </div>
                  </div>
                `;

  document.getElementById('dataPost').insertAdjacentHTML('beforeend', markup);
}

