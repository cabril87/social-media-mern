import React from 'react'
import "./asideRight.css"

const AsideRight = () => {
    return (
        <div className="asideRight-container">
            <div className="asideRight-wrapper">
                <div className="asideRight-birthday-container">
                    <img src="assets/birthday-cake.png" alt="" className="birthday-image" />
                    <span className="birthday-text">
                        <b>Hulk</b> and <b>2 other friends</b> have a birthday today.
                    </span>
                </div>
                <img src="https://d3nuqriibqh3vw.cloudfront.net/styles/aotw_detail_ir/s3/images/diet_pepsi_cat.jpg?itok=0Vl_xARA" alt="" className="asideRight-ad" />
                <h4 className="asideRight-title">
                    Online Friends
                </h4>
                <ul className="asideRight-friend-list">
                    <li className="asideRight-friend">
                        <div className="asideRight-friend-image-container">
                            <img src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGlyb24lMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt="" className="friend-image" />
                            <span className="friend-online"></span>
                        </div>
                        <span className="friend-username">
                            Batman
                        </span>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default AsideRight
