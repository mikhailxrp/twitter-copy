import postTime from '../post_time.js'
export default function () {
  getMessage();
}

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

async function getMessage() {
  let lastMessages = [];
  let userImages = [];

  let messages;
  let images;

  const preloader = document.getElementById('preloader');
  const dataPost = document.getElementById('dataPost');

  for (let i = 0; i <= 4; i++) {
    renderLoadingMessage();
  }

  messages = await gettingDataMessage();
  images = await gettingDataImage();

  // Добавляю в массив lastMessages последние сообщения
  for (let message in messages.lastMessages) {
    lastMessages.push(messages.lastMessages[message]);
  }

  // Добавляю в массив с картинками аватарки пользователей
  for (let avatar in images.pictures) {
    userImages.push(images.pictures[avatar]);
  }

  for (let itemUser of lastMessages) {
    let user = {};
    let avatar = userImages.find((item) => {
      if (item.userId === itemUser.userId) {
        return item;
      }
    });
    user.id = itemUser.userId;
    user.avatar = avatar.userAvatar;
    user.name = itemUser.name;
    user.nikName = itemUser.nikName;
    user.text = itemUser.textMessage;
    user.pictures = itemUser.images;
    user.postTime = itemUser.postTime
    renderMessage(user);
  }
  preloader.style.display = 'none';
  dataPost.style.display = 'block';
}

// расчет времени поста
function getTimePost(year, month, day, hours, minutes, sec) {
  let now = new Date();
  let messageDate = new Date(year, month, day, hours, minutes, sec);

  let newTime = now.getTime() - messageDate.getTime();
  let timeMessage = newTime / (1000 * 60);
  return timeMessage;
}

function renderMessage(user) {
  // преобразую строку в число
  let dateArray = user.postTime.split(',')
  let postTimeArray = []
  
  for (let num of dateArray) {
    postTimeArray.push(parseInt(num));
  }

  let timeMessage = getTimePost(...postTimeArray);
  let userPostTime = postTime(timeMessage)

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

function renderLoadingMessage() {
  const markup = `<div class="message-item_stub">
                    <div class="zagolovok">
                      <div class="img"></div>
                      <div class="specation">
                        <span class="name"></span>
                        <span class="about"></span>
                      </div>
                    </div>
                    <div class="description">
                      <div class="string string-2"></div>
                      <div class="string string-1"></div>
                    </div>
                  </div>
                  `;
  document.getElementById('preloader').insertAdjacentHTML('beforeend', markup);
}
