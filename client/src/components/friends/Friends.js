import React from 'react'
import "./friends.css"

const Friends = ({user}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const limitName = user.username
    console.log(limitName.substring(0, 9) <7 ? limitName : "")
    return (
        <li className="asideLeft-friend">
            <img className="asideLeft-friend-image" src={PF + user.profilePicture} alt="" />
            <span className="asideLeft-friend-name">
                {limitName.substring(0, 9) < limitName.substring(0, 10) ? `${limitName.substring(0,9)}..` : limitName}
            </span>
        </li>
    )
}

export default Friends
