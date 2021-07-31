import React, { useEffect, useState } from 'react'
import AsideLeft from '../../components/asideLeft/AsideLeft'
import Header from '../../components/header/Header'
import Feed from '../../components/feed/Feed'
import AsideRight from '../../components/asideRight/AsideRight'
import "./profile.css"
import axios from 'axios'

const Profile = () => {
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=Matt`)
            setUser(res.data)
        }
        fetchUser()
    }, [])

    return (
        <>
            <Header />
            <div className="profile-container">
                <AsideLeft />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">

                            <img className="profile-cover-picture" src={`${PF}post/3.jpeg`} alt="" />
                            <img className="profile-user-picture" src={`${PF}person/7.jpeg`} alt="" />
                        </div>
                        <div className="profile-info">
                            <div className="profile-info-name" ><b>{user.username}</b></div>
                            <span className="profile-info-desc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profile-right-bottom">
                        <Feed username={user}/>
                        <AsideRight profile/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
