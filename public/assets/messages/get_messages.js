import postTime from "../post_time.js";
import request from "../api/api.js";
export default function () {
  getMessage();
}

async function getMessage() {
  // посты
  const posts = await request("/api/server/posts", "GET");
  // пользователи
  const users = await request("/api/server/users");

  const preloader = document.getElementById("preloader");
  const dataPost = document.getElementById("dataPost");

  for (let message of posts) {
    renderMessage(users, message);
  }
  preloader.style.display = "none";
  dataPost.style.display = "block";
}

// расчет времени поста
function getTimePost(date) {
  let now = Date.now();
  let messageDate = new Date(date).getTime();

  let newTime = now - messageDate;
  let timeMessage = newTime / (1000 * 60);
  return timeMessage;
}

function renderMessage(users, post) {
  let timeMessage = getTimePost(post.post_time);
  let messageTime = postTime(timeMessage);

  let userName;
  let userNikName;
  let userImg;
  let userAvatar;
  for (let user of users) {
    if (user.id === post.user_id) {
      userName = user.user_name;
      userNikName = user.user_nikname;
      userAvatar = user.user_avatar;
      userImg = post.post_image;
    }
  }

  const markup = `
                  <div class="message-item">
                    <div class="message-img">
                      <img src="${userAvatar}" alt="" />
                    </div>
                    <div class="message-content">
                      <div class="message-content-top">
                        <div class="message-header">
                          <div class="message-content-title">${userName}</div>
                          <div class="message-name">${userNikName}</div>
                        </div>
                        <div class="message-time">${messageTime}</div>
                      </div>
                      <p class="message-text">
                        ${post.post_text}
                      </p>
                      <div class="message-content-img">
                        <img src="${userImg}" alt="" />
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

  document.getElementById("dataPost").insertAdjacentHTML("beforeend", markup);
}
