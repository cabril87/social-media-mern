import React from 'react'
import "./asideLeft.css"
import { SiFeedly } from "react-icons/si"
import { AiOutlineWechat } from "react-icons/ai"
import { FaVideo, FaBookmark, FaQuestionCircle, FaDiscourse } from "react-icons/fa"
import { RiGroup2Fill } from "react-icons/ri";
import { MdWork, MdEventAvailable } from "react-icons/md"
import Friends from '../friends/Friends'
import { Users } from "../../dummydata"


const AsideLeft = () => {
    return (
        <div className="asideLeft-container">
            <div className="asideLeft-wrapper">
                <ul className="asideLeft-list">

                    <li className="asideLeft-list-item">
                        <img src="assets/feed.png" alt="" className="asideLeft-icon" />
                        <span className="asideLeft-list-item-text">Feed</span>
                    </li>
                    <li className="asideLeft-list-item">
                        <img src="assets/chats.png" alt="" className="asideLeft-icon" />
                        <span className="asideLeft-list-item-text">Chats</span>
                    </li>
                    <li className="asideLeft-list-item">
                        <img src="assets/videos.png" alt="" className="asideLeft-icon" />
                        <span className="asideLeft-list-item-text">Videos</span>
                    </li>
                    <li className="asideLeft-list-item">
                        <img src="assets/groups.png" alt="" className="asideLeft-icon" />
                        <span className="asideLeft-list-item-text">Groups</span>
                    </li>
                    <li className="asideLeft-list-item">
                        <img src="assets/bookmark.png" alt="" className="asideLeft-icon" />
                        <span className="asideLeft-list-item-text">Bookmarks</span>
                    </li>
                    <li className="asideLeft-list-item">
                        <img src="assets/question.png" alt="" className="asideLeft-icon" />
                        <span className="asideLeft-list-item-text">Questions</span>
                    </li>
                </ul>
                {/* <button className="asideLeft-button">Show More</button> */}
                <hr className="asideLeft-hr" />
                <div className="asideLeft-friends-container">

                    <div className="sideLeft-friends-container-title">Friends</div>
                    <ul className="asideLeft-friendlist">
                        {Users.map((user, index) => {
                            return index < 8 && <Friends key={user.id} user={user} />
                        })}



                    </ul>
                    <div className="asideLeft-friendslist-container">
                        <button className="asideLeft-button-friend">Show More</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsideLeft
