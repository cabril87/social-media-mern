import React from 'react'
import "./asideRight.css"
import { Users } from "../../dummydata"
import Online from '../online/Online'

const AsideRight = ({ profile }) => {

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
                <div className="asideRight-title"><b>User Information</b></div>
                <div className="asideRight-info">
                    <div className="asideRight-info-item">
                        <span className="asideRight-info-key">City:</span>
                        <span className="asideRight-info-value">Chicago</span>
                    </div>
                    <div className="asideRight-info-item">
                        <span className="asideRight-info-key">From:</span>
                        <span className="asideRight-info-value">England</span>
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
                    <div className="asideRight-following">
                        <img src="assets/person/1.jpeg" alt="" className="asideRight-following-image" />
                        <span className="asideRight-following-name">
                            Batman
                        </span>
                    </div>
                    <div className="asideRight-following">
                        <img src="assets/person/2.jpeg" alt="" className="asideRight-following-image" />
                        <span className="asideRight-following-name">
                            Batman
                        </span>
                    </div>
                    <div className="asideRight-following">
                        <img src="assets/person/3.jpeg" alt="" className="asideRight-following-image" />
                        <span className="asideRight-following-name">
                            Batman
                        </span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="asideRight-container">
            <div className="flipped">
                <div className="asideRight-wrapper">
                    {profile ? <ProfileAsideRight /> : <HomeAsideRight />}
                </div>
            </div>

        </div>
    )
}

export default AsideRight
