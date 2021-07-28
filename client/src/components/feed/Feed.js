import React from 'react'
import Post from '../post/Post'
import Shared from '../shared/Shared'
import "./feed.css"
import { Posts } from "../../dummydata"


const Feed = () => {
    return (
        <div className="feed-container">
            <div className="feed-wrapper">
                <Shared />
                {Posts.map((post) => {
                   return <Post key={post.id} post={post}/>

                })}
                
              
            </div>
        </div>
    )
}

export default Feed
