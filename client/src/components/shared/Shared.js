import React from 'react';
import "./shared.css";
import { MdPermMedia } from "react-icons/md";
import { ImPriceTags } from "react-icons/im"
import { IoLocation } from "react-icons/io5"
import { HiEmojiHappy } from "react-icons/hi"

const Shared = () => {
    return (
        <div className="shared-container">
            <div className="shared-wrapper">
                <div className="shared-top">
                    <img className="shared-profile-image" src="https://images.unsplash.com/photo-1524481905007-ea072534b820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="hang spidey" />
                    <input placeholder="whats on your mind?" className="shared-input" />
                </div>
                <hr className="shared-row"/>
                <div className="shared-bottom">
                    <div className="shared-options">
                        <div className="shared-option">
                            <MdPermMedia  className="shared-option-icon" />
                            <span className=" shared-option-text">Photo or Video</span>
                        </div>
                        <div className="shared-option">
                            <ImPriceTags className="shared-option-icon" />
                            <span className=" shared-option-text">Tag</span>
                        </div>
                        <div className="shared-option">
                            <IoLocation  className="shared-option-icon" />
                            <span className=" shared-option-text">Location</span>
                        </div>
                        <div className="shared-option">
                            <HiEmojiHappy  className="shared-option-icon" />
                            <span className=" shared-option-text">Feelings</span>
                        </div>
                    </div>
                    <button className="shared-button">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Shared
