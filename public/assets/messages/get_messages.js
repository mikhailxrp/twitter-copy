let lastMessages = [];
let userImages = [];

export default function () {
  getMessage();
}

async function getMessage() {
  try {
    const response = fetch('/public/data.json');
    const data = (await response).json();
    const messages = await data;

    // Добавляю в массив lastMessages последние сообщения
    for (let message in messages.lastMessages) {
      lastMessages.push(messages.lastMessages[message]);
    }

    renderMessage(
      lastMessages[0].userAvatar,
      lastMessages[0].name,
      lastMessages[0].nikName,
      lastMessages[0].textMessage
    );
    
  } catch (error) {
    console.log(error);
  }
}

function renderMessage(avatar, name, nikName, text) {
  const markup = `
                  <div class="message-item">
                    <div class="message-img">
                      <img src="${avatar}" alt="" />
                    </div>
                    <div class="message-content">
                      <div class="message-content-top">
                        <div class="message-header">
                          <div class="message-content-title">${name}</div>
                          <div class="message-name">${nikName}</div>
                        </div>
                        <div class="message-time">28 минут назад</div>
                      </div>
                      <p class="message-text">
                        ${text}
                      </p>
                      <div class="message-content-img"></div>
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


