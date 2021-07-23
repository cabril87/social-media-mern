import React from 'react'
import "./post.css"

const Post = () => {
    return (
        <div className="post-container">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img className="post-top-left-profile-image" src="" alt="" />
                        <span className="post-top-left-username">Spidey</span>
                        <span className="post-top-left-date">5 min ago</span>
                    </div>
                    <div className="post-top-right">

                    </div>
                </div>
                <div className="post-center"></div>
                <div className="post-bottom"></div>
            </div>
            
        </div>
    )
}

export default Post
