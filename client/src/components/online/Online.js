import React from 'react'
import "./online.css"

const Online = ({ user }) => {
    return (

        <>
        <ul className="asideRight-friend-list">

            <li className="asideRight-friend">
                <div className="asideRight-friend-image-container">
                    <img src={user.profilePicture} alt="" className="friend-image" />
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
