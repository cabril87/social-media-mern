import React from 'react'
import Post from '../post/Post'
import Shared from '../shared/Shared'
import "./feed.css"
import { Posts, Users } from "../../dummydata"
import SharedOnline from '../sharedOnline/SharedOnline'


const Feed = () => {
    return (
        <div className="feed-container">
            <div className="feed-wrapper">
                <div className="feed-top">

                    {/* <SharedOnline users={Users} className="online" /> */}
                </div>
                <div className="feed-bottom">
                    <Shared />
                    {Posts.map((post) => {
                        return <Post key={post.id} post={post} />

                    })}

                </div>


            </div>
        </div>
    )
}

export default Feed
