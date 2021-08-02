import React from 'react'
import "./asideLeft.css"
import Friends from '../friends/Friends'
import { Users } from "../../dummydata"


const AsideLeft = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className="asideLeft-container">
            <div className="asideLeft-wrapper">
                <ul className="asideLeft-list">

                    <li className="asideLeft-list-item">
                        <img src={`${PF}feed.png`} alt="" className="asideLeft-icon" />
                        <span className="asideLeft-list-item-text">Feed</span>
                    </li>
                    <li className="asideLeft-list-item">
                        <img src={`${PF}chats.png `}alt="" className="asideLeft-icon" />
                        <span className="asideLeft-list-item-text">Chats</span>
                    </li>
                    <li className="asideLeft-list-item">
                        <img src={`${PF}videos.png`}alt="" className="asideLeft-icon" />
                        <span className="asideLeft-list-item-text">Videos</span>
                    </li>
                    <li className="asideLeft-list-item">
                        <img src={`${PF}groups.png`} alt="" className="asideLeft-icon" />
                        <span className="asideLeft-list-item-text">Groups</span>
                    </li>
                    <li className="asideLeft-list-item">
                        <img src={`${PF}bookmark.png`} alt="" className="asideLeft-icon" />
                        <span className="asideLeft-list-item-text">Bookmarks</span>
                    </li>
                    <li className="asideLeft-list-item">
                        <img src={`${PF}question.png`} alt="" className="asideLeft-icon" />
                        <span className="asideLeft-list-item-text">Questions</span>
                    </li>
                </ul>
                {/* <button className="asideLeft-button">Show More</button> */}
                <hr className="asideLeft-hr" />
                {/* <div className="asideLeft-friends-container">

                    <div className="sideLeft-friends-container-title">Friends</div>
                    <ul className="asideLeft-friendlist">
                        {Users.map((user, index) => {
                            return index < 8 && <Friends key={user.id} user={user} />
                        })}



                    </ul>
                    <div className="asideLeft-friendslist-container">
                        <button className="asideLeft-button-friend">Show More</button>

                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default AsideLeft
