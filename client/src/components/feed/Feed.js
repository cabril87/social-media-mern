import React from 'react'
import Post from '../post/Post'
import Shared from '../shared/Shared'
import "./feed.css"

const Feed = () => {
    return (
        <div className="feed-container">
            <div className="feed-wrapper">
                <Shared />
                <Post />
            </div>
        </div>
    )
}

export default Feed
