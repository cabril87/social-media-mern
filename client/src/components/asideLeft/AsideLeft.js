import React from 'react'
import "./asideLeft.css"
import { SiFeedly } from "react-icons/si"
import { AiOutlineWechat } from "react-icons/ai"
import { FaVideo, FaBookmark, FaQuestionCircle, FaDiscourse } from "react-icons/fa"
import { RiGroup2Fill } from "react-icons/ri";
import { MdWork, MdEventAvailable } from "react-icons/md"

const AsideLeft = () => {
    return (
        <div className="asideLeft-container">
            <div className="asideLeft-wrapper">
                <ul className="asideLeft-list">
                    
                    <li className="asideLeft-list-item">
                        <SiFeedly className="asideLeft-icon"/>
                        <span className="asideLeft-list-item-text">Feed</span>
                    </li>
                    <li className="asideLeft-list-item">
                        <AiOutlineWechat className="asideLeft-icon"/>
                        <span className="asideLeft-list-item-text">Chats</span>
                    </li>
                    <li className="asideLeft-list-item">
                        <FaVideo className="asideLeft-icon"/>
                        <span className="asideLeft-list-item-text">Videos</span>
                    </li>
                    <li className="asideLeft-list-item">
                        <RiGroup2Fill className="asideLeft-icon"/>
                        <span className="asideLeft-list-item-text">Groups</span>
                    </li>
                    <li className="asideLeft-list-item">
                        <FaBookmark className="asideLeft-icon"/>
                        <span className="asideLeft-list-item-text">Bookmarks</span>
                    </li>
                    <li className="asideLeft-list-item">
                        <FaQuestionCircle className="asideLeft-icon"/>
                        <span className="asideLeft-list-item-text">Questions</span>
                    </li>
                    <li className="asideLeft-list-item">
                        <MdEventAvailable className="asideLeft-icon"/>
                        <span className="asideLeft-list-item-text">Events</span>
                    </li>
                </ul>
                <hr />
                <button className="asideLeft-button">Show More</button>
                <ul className="asideLeft-friendlist">
                    <li className="asideLeft-friend">
                        <img className="asideLeft-friend-image" src="https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80" alt="spidey" />
                        <span className="asideLeft-friend-name">Spider Man</span>
                    </li>
                    <li className="asideLeft-friend">
                        <img className="asideLeft-friend-image" src="https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80" alt="spidey" />
                        <span className="asideLeft-friend-name">Spider Man</span>
                    </li>
                    <li className="asideLeft-friend">
                        <img className="asideLeft-friend-image" src="https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80" alt="spidey" />
                        <span className="asideLeft-friend-name">Spider Man</span>
                    </li>
                    <li className="asideLeft-friend">
                        <img className="asideLeft-friend-image" src="https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80" alt="spidey" />
                        <span className="asideLeft-friend-name">Spider Man</span>
                    </li>
                    <li className="asideLeft-friend">
                        <img className="asideLeft-friend-image" src="https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80" alt="spidey" />
                        <span className="asideLeft-friend-name">Spider Man</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AsideLeft
