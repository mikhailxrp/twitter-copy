import user1 from '../img/message/user1.png'
import './style/messageItem.css'
const MessageItem = () => {
    return <>
         <div className="message-item">
            <div className="message-img">
              <img src={user1} alt="" />
            </div>
            <div className="message-content">
              <div className="message-content-top">
                <div className="message-header">
                  <div className="message-content-title">Винсет Вега</div>
                  <div className="message-name">@vega</div>
                </div>
                <div className="message-time">2 часа назад</div>
              </div>
              <p className="message-text">
              У них там все немного не так. В смысле, у них там все точно так же, как и здесь, только немного по-другому.
              </p>
              <div className="message-content-img">
                <img src="" alt="" />
              </div>
              <div className="message-content-footer">
                <div className="message-footer-item">
                  <div><img src="./img/first_page/back.svg" alt="" /></div>
                  <p>21</p>
                </div>
                <div className="message-footer-item">
                  <div><img src="./img/first_page/heart.svg" alt="" /></div>
                  <p>23</p>
                </div>
                <div className="message-footer-item">
                  <div><img src="./img/first_page/export.svg" alt="" /></div>
                  <p>9</p>
                </div>
              </div>
            </div>
          </div>
    </>
}

export default MessageItem