import React from 'react'
import "./post.css"
import { BiDotsVertical } from "react-icons/bi"


const Post = () => {
    return (
        <div className="post-container">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img className="post-top-left-profile-image" src="https://images.unsplash.com/photo-1542623024-a797a755b8d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVsa3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt="" />
                        <span className="post-top-left-username">Hulk</span>
                        <span className="post-top-left-date">5 min ago</span>
                    </div>
                    <div className="post-top-right">
                        <BiDotsVertical />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-center-text">Hey its my first post!</span>
                    <img className="post-center-image" src="https://images.unsplash.com/photo-1554579653-08ba74000d7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGh1bGt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt="" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                     
                        <img className="post-bottom-left-like-icon" src="assets/like.png" alt="like" />
                        <img className="post-bottom-left-like-icon" src="assets/dislike.png" alt="dislike" />
                        <img className="post-bottom-left-like-icon" src="assets/in-love.png" alt="love" />
                        <span className="post-bottom-left-like-icon-counter">
                            32 people liked it
                        </span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-bottom-right-comment-text">9 comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post
