import React from 'react'
import { HiSearchCircle } from 'react-icons/hi';
import { IoPersonCircleSharp, IoNotificationsCircleSharp, IoChatboxEllipses } from "react-icons/io5";
import "./header.css"

import "./header.css"

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-left">
                <span className="logo">socialbl</span>
            </div>
            <div className="header-center">
                <div className="header-searchbar">
                    <HiSearchCircle className="searchIcon"/>
                    <input placeholder="Search for friends, post, or videos" className="header-searchInput" />
                </div>
            </div>
            <div className="header-right">
                <div className="header-links">
                    <div className="header-link">Homepage</div>
                    <div className="header-link">Timeline</div>
                </div>
                <div className="header-icons">
                    <div className="header-icon-item">
                        <IoPersonCircleSharp className="searchIcon"/>
                        <span className="header-icon-badge">1</span>
                    </div>
                    <div className="header-icon-item">
                        <IoChatboxEllipses className="searchIcon"/>
                        <span className="header-icon-badge">2</span>
                    </div>
                    <div className="header-icon-item">
                        <IoNotificationsCircleSharp className="searchIcon"/>
                        <span className="header-icon-badge">1</span>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1534375971785-5c1826f739d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" className="header-profile-picture" />
            </div>
        </div>
    )
}

export default Header
