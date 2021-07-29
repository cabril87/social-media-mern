import React from 'react'
import AsideLeft from '../../components/asideLeft/AsideLeft'
import AsideRight from '../../components/asideRight/AsideRight'
import Feed from '../../components/feed/Feed'
import Header from '../../components/header/Header'
import SharedOnline from '../../components/sharedOnline/SharedOnline'
import { Users } from '../../dummydata'
import "./home.css"

const Home = () => {
    return (
        <>
            <Header />
            <div className="home-container">
                <AsideLeft />
                <div className="center-container">
                    <div className="center-top">
                        <SharedOnline users={Users} />
                    </div>
                   
                    <div className="center-bottom">
                        <Feed />
                    </div>
                </div>
                <AsideRight />
            </div>
        </>
    )
}

export default Home
