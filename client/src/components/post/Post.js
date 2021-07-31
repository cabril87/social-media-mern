import React, { useEffect, useContext, useState } from 'react'
import "./post.css"
import { BiDotsVertical } from "react-icons/bi"
import axios from 'axios'
import { format } from "timeago.js"
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";



const Post = ({ post }) => {
    const [like, setLike] = useState(post.likes.length)
    const [isLike, setIsLike] = useState(false)
    const [user, setUser] = useState({})

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser } = useContext(AuthContext);

    useEffect(() => {
        setIsLike(post.likes.includes(currentUser._id));
      }, [currentUser._id, post.likes]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`)
            setUser(res.data)
        }
        fetchUser()
    }, [post.userId])

    const likeHandler = (e) => {
        try {
            axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
          } catch (err) {}
        setLike(isLike ? like - 1 : like + 1)
        setIsLike(!isLike)
    }

    return (
        <div className="post-container">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <Link to={`profile/${user.username}`}>
                            <img className="post-top-left-profile-image" src={
                                user.profilePicture
                                    ? PF + user.profilePicture
                                    : PF + "person/no-avatar.png"
                                }
                                alt=""
                            />
                        </Link>
                        <span className="post-top-left-username">{user.username}</span>
                        <span className="post-top-left-date">{format(post.createdAt)}</span>
                    </div>
                    <div className="post-top-right">
                        <BiDotsVertical />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-center-text">{post?.desc}</span>
                    <img className="post-center-image" src={PF + post.img} alt="" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">

                        <img
                            onClick={likeHandler}
                            className="post-bottom-left-like-icon" src={`${PF}like.png `} alt="like" />


                        <img
                            onClick={likeHandler}
                            className="post-bottom-left-like-icon" src={`${PF}heart.png`} alt="love" />
                        <span className="post-bottom-left-like-icon-counter">
                            {like} people liked it
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
