import './style/preloader.css'
const preloader = () => {
    return <>
    <div className="message-item_stub">
        <div className="zagolovok">
            <div className="img"></div>
            <div className="specation">
                <span className="name"></span>
                <span className="about"></span>
            </div>
        </div>
        <div className="description">
            <div className="string string-2"></div>
            <div className="string string-1"></div>
        </div>
    </div>
    </>
}

export default preloader