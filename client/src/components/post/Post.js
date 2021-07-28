import React from 'react'
import "./post.css"
import { BiDotsVertical } from "react-icons/bi"
import { Users } from "../../dummydata"


const Post = ({post}) => {


    return (
        <div className="post-container">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img className="post-top-left-profile-image" src={Users.filter(u=>u.id === post?.userId)[0].profilePicture} alt="" />
                        <span className="post-top-left-username">{Users.filter(u=>u.id === post?.userId)[0].username}</span>
                        <span className="post-top-left-date">{post.date}</span>
                    </div>
                    <div className="post-top-right">
                        <BiDotsVertical />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-center-text">{post?.desc}</span>
                    <img className="post-center-image" src={post.photo} alt="" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                     
                        <img className="post-bottom-left-like-icon" src="assets/like.png" alt="like" />
                       
                       
                        <img className="post-bottom-left-like-icon" src="assets/heart.png" alt="love" />
                        <span className="post-bottom-left-like-icon-counter">
                            {post.like} people liked it
                        </span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-bottom-right-comment-text">{post.comment} comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post
