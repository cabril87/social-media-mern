import React from 'react';
import "./shared.css";
import { MdPermMedia } from "react-icons/md";
import { ImPriceTags } from "react-icons/im"
import { IoLocation } from "react-icons/io5"
import { HiEmojiHappy } from "react-icons/hi"
import SharedOnline from '../sharedOnline/SharedOnline';
import { Users } from '../../dummydata';
// import Online from '../online/Online';

const Shared = () => {
    // const SharedOnline = ({ users }) => {
    //     const [current, setCurrent] = useState(0);
    //     const length = users.length;
    
    //     const nextSlide = () => {
    //         setCurrent(current === length - 4 ? 0 : current + 1);
    //     };

    //     const prevSlide = () => {
    //         setCurrent(current === 0 ? length - 4 : current - 1);
    //     };

    //     return (
    //         <>
    //             <div className="shared-carousel">
                   
    //                 <img src="assets/left.png" alt="" className="carousel-icon" onClick={prevSlide} />
    //                 <ul className="asideLeft-friendlist">
    //                     {Users.map((user, index) => {
    //                         return (
    //                             <>
    //                                 <div>
    //                                     {index === current && <Online key={user.id} user={user} />}
    //                                 </div>
    //                                 <div>
    //                                     {index === current + 1 && <Online key={user.id} user={user} />}
    //                                 </div>
    //                                 <div>
    //                                     {index === current + 2 && <Online key={user.id} user={user} />}
    //                                 </div>
    //                                 <div>
    //                                     {index === current + 3 && <Online key={user.id} user={user} />}
    //                                 </div>
    //                             </>
    //                         )
    //                     })}
    //                 </ul>
    //                 <img src="assets/right.png" alt="" className="carousel-icon" onClick={nextSlide} />
    //             </div>
    //         </>
    //     )
    // }
    const ShardedSearch = () => {
        return (
            <>
                <div className="shared-top">
                    <img className="shared-profile-image" src="https://images.unsplash.com/photo-1524481905007-ea072534b820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="hang spidey" />
                    <input placeholder="whats on your mind?" className="shared-input" />
                </div>
                <hr className="shared-row" />
                <div className="shared-bottom">
                    <div className="shared-options">
                        <div className="shared-option">
                            <MdPermMedia className="shared-option-icon" />
                            <span className=" shared-option-text">Photo or Video</span>
                        </div>
                        <div className="shared-option">
                            <ImPriceTags className="shared-option-icon" />
                            <span className=" shared-option-text">Tag</span>
                        </div>
                        <div className="shared-option">
                            <IoLocation className="shared-option-icon" />
                            <span className=" shared-option-text">Location</span>
                        </div>
                        <div className="shared-option">
                            <HiEmojiHappy className="shared-option-icon" />
                            <span className=" shared-option-text">Feelings</span>
                        </div>
                    </div>
                    <button className="shared-button">Share</button>
                </div>
            </>
        )
    }
    return (
        <>
            {/* <div className="online-container">
                <div className="online-wrapper">
                    <SharedOnline users={Users} />
                </div>
            </div> */}
            
            <div className="shared-container">
                <div className="shared-wrapper">
                    <ShardedSearch />
                </div>
            </div>
        </>
    )
}

export default Shared
