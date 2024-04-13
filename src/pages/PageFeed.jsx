import ProfileFeedComponent from "../components/ProfileFeedComponent"
import AsideTopics from '../components/AsideTopics'
import TopicPopular from "../components/TopicPopular"
import MessageForm from "../components/MessageForm"
import MessageLogic from "../components/MessageLogic"

import { useSelector } from 'react-redux';

const PageFeed = () => {
    const posts = useSelector(state => state.posts.posts)
    const { status, error } = useSelector(state => state.posts)

    const users = useSelector(state => state.users.users)
    const { usersStatus, usersError } = useSelector(state => state.users)

    return (<>
        <div className="feed">
            <div className="container">
                <div className="content-wrapper">
                    <div className="content-block">
                        <MessageForm />
                        <MessageLogic posts={posts} users={users} status={status} usersStatus={usersStatus} />
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