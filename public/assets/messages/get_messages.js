export default function () {
  getMessage();
}

async function getMessage() {
  let lastMessages = [];
  let userImages = [];
  try {
    const response = fetch('/public/data.json');
    const data = (await response).json();
    const messages = await data;

    const responseImg = fetch('/public/JSON/pictures.json');
    const dataImg = (await responseImg).json();
    const images = await dataImg;

    // Добавляю в массив lastMessages последние сообщения
    for (let message in messages.lastMessages) {
      lastMessages.push(messages.lastMessages[message]);
    }

    // Добавляю в массив с картинками аватарки пользователей
    for (let avatar in images.pictures) {
      userImages.push(images.pictures[avatar]);
    }

    for(let itemUser of lastMessages){
      let user = {};
      let avatar = userImages.find((item) => {
        if (item.userId === itemUser.userId) {
          return item;
        }
      });
      user.id = itemUser.userId
      user.avatar = avatar.userAvatar
      user.name = itemUser.name
      user.nikName = itemUser.nikName
      user.text = itemUser.textMessage;
      user.pictures = itemUser.images;

      renderMessage(user)
    }
    
  } catch (error) {
    console.log(error);
  }
}

function renderMessage(user) {
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
                        <div class="message-time">28 минут назад</div>
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
  document.querySelector('.message-wrapper').insertAdjacentHTML('beforeend', markup);
}

