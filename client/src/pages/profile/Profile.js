import React from 'react'
import AsideLeft from '../../components/asideLeft/AsideLeft'
import Header from '../../components/header/Header'
import Feed from '../../components/feed/Feed'
import AsideRight from '../../components/asideRight/AsideRight'
import "./profile.css"

const Profile = () => {
    return (
        <>
            <Header />
            <div className="profile-container">
                <AsideLeft />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">

                            <img className="profile-cover-picture" src="assets/post/3.jpeg" alt="" />
                            <img className="profile-user-picture" src="assets/person/7.jpeg" alt="" />
                        </div>
                        <div className="profile-info">
                            <div className="profile-info-name" ><b>Hulk</b></div>
                            <span className="profile-info-desc">Hello my name is Hulk</span>
                        </div>
                    </div>
                    <div className="profile-right-bottom">
                        <Feed />
                        <AsideRight profile/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
