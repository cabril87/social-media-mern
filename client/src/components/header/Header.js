import React from 'react'
import { Link } from "react-router-dom"
import "./header.css"

import "./header.css"

const Header = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className="header-container">
            <div className="header-left">
                <Link to="/" style={{textDecoration: "none"}}>

                <span className="logo">socialbl</span>
                </Link>
            </div>
            <div className="header-center">
                <div className="header-searchbar">
                    <img src={`${PF}search.png`} alt="" className="searchIcons" />
                    <input placeholder="Search for friends, post, or videos" className="header-searchInput" />
                </div>
            </div>
            <div className="header-right">
                <div className="header-links">
                    <div className="header-link">
                       <img src={`${PF}home.png`} alt="" className="header-link-icon" />
                    </div>
                    <div className="header-link">
                    <img src={`${PF}timeline.png`} alt="" className="header-link-icon" />
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1534375971785-5c1826f739d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" className="header-profile-picture" />
                <div className="header-icons">
                    <div className="header-icon-item">
                        <img src={`${PF}account.png`} alt="" className="searchIcons" />
                        {/* <IoPersonCircleSharp className="searchIcon" /> */}
                        <span className="header-icon-badge">1</span>
                    </div>
                    <div className="header-icon-item">
                    <img src={`${PF}message.png`} alt="" className="searchIcons" />
                        {/* <IoChatboxEllipses className="searchIcon" /> */}
                        <span className="header-icon-badge">2</span>
                    </div>
                    <div className="header-icon-item">
                    <img src={`${PF}notifications.png `}alt="" className="searchIcons" />
                        {/* <IoNotificationsCircleSharp className="searchIcon" /> */}
                        <span className="header-icon-badge">1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
