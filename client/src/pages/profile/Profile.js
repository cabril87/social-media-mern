import React, { useEffect, useState } from 'react'
import AsideLeft from '../../components/asideLeft/AsideLeft'
import Header from '../../components/header/Header'
import Feed from '../../components/feed/Feed'
import AsideRight from '../../components/asideRight/AsideRight'
import "./profile.css"
import axios from 'axios'
import { useParams } from "react-router";

const Profile = () => {
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`/users?username=${username}`);
          setUser(res.data);
        };
        fetchUser();
      }, [username]);

    return (
        <>
            <Header />
            <div className="profile-container">
                <AsideLeft />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">

                            <img 
                            className="profile-cover-picture" 
                            src={
                                user.coverPicture
                                  ? PF + user.coverPicture
                                  : PF + "person/noCover.png"
                              }
                            alt="" 
                            />
                            <img 
                            className="profile-user-picture" 
                            src={
                                user.profilePicture
                                  ? PF + user.profilePicture
                                  : PF + "person/noAvatar.png"
                              }
                            alt="" 
                            />
                        </div>
                        <div className="profile-info">
                            <div className="profile-info-name" ><b>{user.username}</b></div>
                            <span className="profile-info-desc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profile-right-bottom">
                        <Feed username={username}/>
                        <AsideRight user={user}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
