import img1 from '../img/topics/img1.png'
import img2 from '../img/topics/img2.png'
import img3 from '../img/topics/img3.png'
const TopicPopular = () => {
    return <>
        <div className="popular">
            <h3 className="popular-title">Рекомендации для вас</h3>
            <div className="popular-wrapper">
                <div className="popular-item">
                    <div className="popular-item-img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="popular-item-content">
                        <p className="popular-item-text">Хабр Научпоп</p>
                        <p className="popular-item-subtext">@habr_popsci</p>
                    </div>
                    <button type="button" className="btn btn-reed">Читать</button>
                </div>
                <div className="popular-item">
                    <div className="popular-item-img">
                        <img src={img2} alt="" />
                    </div>
                    <div className="popular-item-content">
                        <p className="popular-item-text">Матч ТВ</p>
                        <p className="popular-item-subtext">@MatchTV</p>
                    </div>
                    <button type="button" className="btn btn-reed">Читать</button>
                </div>
                <div className="popular-item">
                    <div className="popular-item-img">
                        <img src={img3} alt="" />
                    </div>
                    <div className="popular-item-content">
                        <p className="popular-item-text">Популярная меха...</p>
                        <p className="popular-item-subtext">@PopMechanica</p>
                    </div>
                    <button type="button" className="btn btn-reed">Читать</button>
                </div>
            </div>
        </div>
    </>
}

export default TopicPopular