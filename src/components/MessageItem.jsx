import './style/messageItem.css'
const MessageItem = ({name, text, image, nikName, avatar, postTime}) => {

    return <>
         <div className="message-item" >
            <div className="message-img">
              <img src={avatar} alt="" />
            </div>
            <div className="message-content">
              <div className="message-content-top">
                <div className="message-header">
                  <div className="message-content-title">{name}</div>
                  <div className="message-name">{nikName}</div>
                </div>
                <div className="message-time">{postTime}</div>
              </div>
              <p className="message-text">
              {text}
              </p>
              <div className="message-content-img">
                <img src={image} alt="" />
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