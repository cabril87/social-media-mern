import React from 'react'
import "./online.css"

const Online = ({ user }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (

        <>
        <ul className="asideRight-friend-list">

            <li className="asideRight-friend">
                <div className="asideRight-friend-image-container">
                    <img src={PF + user.profilePicture} alt="" className="friend-image" />
                    <span className="friend-online"></span>
                </div>
                {/* <span className="friend-username">
                {user.username}
            </span> */}
            </li>
        </ul>
        </>

    )
}

export default Online
