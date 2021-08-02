import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import "./asideRight.css"


const AsideRight = ({ user }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends, setFriends] = useState([]);
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [followed, setFollowed] = useState(
        currentUser.followings.includes(user?.id)
    );

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("/users/friends/" + user._id);
                setFriends(friendList.data);
            } catch (err) {
                console.log(err);
            }
        };
        getFriends();
    }, [user]);

    const handleClick = async () => {
        try {
            if (followed) {
                await axios.put(`/users/${user._id}/unfollow`, {
                    userId: currentUser._id,
                });
                dispatch({ type: "UNFOLLOW", payload: user._id });
            } else {
                await axios.put(`/users/${user._id}/follow`, {
                    userId: currentUser._id,
                });
                dispatch({ type: "FOLLOW", payload: user._id });
            }
            setFollowed(!followed);
        } catch (err) {
        }
    };

    const HomeAsideRight = () => {
        return (
            <>
                <div className="asideRight-birthday-container">
                    <img src="assets/birthday-cake.png" alt="" className="birthday-image" />
                    <span className="birthday-text">
                        <b>Hulk</b> and <b>2 other friends</b> have a birthday today.
                    </span>
                </div>
                <img src="https://d3nuqriibqh3vw.cloudfront.net/styles/aotw_detail_ir/s3/images/diet_pepsi_cat.jpg?itok=0Vl_xARA" alt="" className="asideRight-ad" />

            </>
        )
    }

    const ProfileAsideRight = () => {
        return (
            <>
                {user.username !== currentUser.username && (
                    <button className="rightbarFollowButton" onClick={handleClick}>
                        {followed ? "Unfollow" : "Follow"}
                    </button>
                )}
                <div className="asideRight-title"><b>User Information</b></div>
                <div className="asideRight-info">
                    <div className="asideRight-info-item">
                        <span className="asideRight-info-key">City:</span>
                        <span className="asideRight-info-value">{user.city}</span>
                    </div>
                    <div className="asideRight-info-item">
                        <span className="asideRight-info-key">From:</span>
                        <span className="asideRight-info-value">{user.from}</span>
                    </div>
                    <div className="asideRight-info-item">
                        <span className="asideRight-info-key">Occupation:</span>
                        <span className="asideRight-info-value">Scientist</span>
                    </div>
                </div>
                <div className="asideRight-title">
                    <b>User Friends</b>
                </div>
                <div className="asideRight-followings">
                    {friends.map((friend) => (
                        <Link
                            to={"/profile/" + friend.username}
                            style={{ textDecoration: "none" }}
                        >
                            <div className="asideRight-following">
                                <img
                                    src={
                                        friend.profilePicture
                                            ? PF + friend.profilePicture
                                            : PF + "person/no-avatar.png"
                                    }
                                    alt=""
                                    className="asideRight-following-image"
                                />
                                <span className="asideRight-following-name">{friend.username}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </>
        )
    }
    return (
        <div className="asideRight-container">
            <div className="flipped">
                <div className="asideRight-wrapper">
                    {user ? <ProfileAsideRight /> : <HomeAsideRight />}
                </div>
            </div>

        </div>
    )
}

export default AsideRight
