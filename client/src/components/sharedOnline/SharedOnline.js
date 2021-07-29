import { useState } from "react";
import { Users } from "../../dummydata";
import Online from "../online/Online";
import "./sharedOnline.css"


const SharedOnline = ({ users }) => {
    const [current, setCurrent] = useState(0);
    const length = users.length;

    const nextSlide = () => {
        setCurrent(current === length - 4 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 4 : current - 1);
    };

    return (
        <>
            <div className="online-container">
                <div className="online-wrapper">
                    <div className="shared-carousel">

                        <img src="assets/left.png" alt="" className="carousel-icon" onClick={prevSlide} />
                        <ul className="asideLeft-friendlist">
                            {Users.map((user, index) => {
                                return (
                                    <>
                                        <div>
                                            {index === current && <Online key={user.id} user={user} />}
                                        </div>
                                        <div>
                                            {index === current + 1 && <Online key={user.id} user={user} />}
                                        </div>
                                        <div>
                                            {index === current + 2 && <Online key={user.id} user={user} />}
                                        </div>
                                        <div>
                                            {index === current + 3 && <Online key={user.id} user={user} />}
                                        </div>
                                    </>
                                )
                            })}
                        </ul>
                        <img src="assets/right.png" alt="" className="carousel-icon" onClick={nextSlide} />
                    </div>
                </div>
            </div>
  

        </>
    )
}

export default SharedOnline