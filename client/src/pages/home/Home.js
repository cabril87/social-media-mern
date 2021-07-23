import React from 'react'
import AsideLeft from '../../components/asideLeft/AsideLeft'
import AsideRight from '../../components/asideRight/AsideRight'
import Feed from '../../components/feed/Feed'
import Header from '../../components/header/Header'
import "./home.css"

const Home = () => {
    return (
        <>
            <Header />
            <div className="home-container">
                <AsideLeft />
                <Feed />
                <AsideRight />
            </div>
        </>
    )
}

export default Home
