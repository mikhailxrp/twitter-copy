import ProfileFeedComponent from "../components/ProfileFeedComponent"
import AsideTopics from '../components/AsideTopics'
import TopicPopular from "../components/TopicPopular"
import MessageForm from "../components/MessageForm"
import MessageLogic from "../components/MessageLogic"

const PageFeed = () => {
    return (<>
        <div className="feed">
            <div className="container">
                <div className="content-wrapper">
                    <div className="content-block">
                        <MessageForm />
                        <MessageLogic />
                    </div>
                    <div className="aside-block">
                        <ProfileFeedComponent />
                        <AsideTopics />
                        <TopicPopular />
                    </div>
                </div>

            </div>

        </div>

        <div className="overlay "></div>

    </>)
}

export default PageFeed     