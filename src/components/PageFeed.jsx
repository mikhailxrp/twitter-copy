import Header from "./Header.jsx"
import ProfileComponent from "./ProfileComponent.jsx"
import AsideTopics from './AsideTopics.jsx'
import TopicPopular from "./TopicPopular.jsx"
import MessageForm from "./MessageForm.jsx"
import MessageLogic from "./MessageLogic.jsx"
import Footer from "./Footer.jsx"

const PageFeed = () => {
    return (<>
    <Header/>
        <div className="feed">
            <div className="container">
                <div className="content-wrapper">
                    <div className="content-block">
                        <MessageForm/>
                        <MessageLogic/>
                    </div>
                    <div className="aside-block">
                        <ProfileComponent/>
                        <AsideTopics/>
                        <TopicPopular/>
                        
                    </div>
                </div>
                
            </div>
            
        </div>
        <Footer/>

        <div className="overlay "></div>
       
    </>)
}

export default PageFeed     