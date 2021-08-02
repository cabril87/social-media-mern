
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./shared.css";
import { MdPermMedia } from "react-icons/md";
import { ImPriceTags } from "react-icons/im"
import { IoLocation } from "react-icons/io5"
import { HiEmojiHappy } from "react-icons/hi"


const Shared = () => {
    
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            description: desc.current.value,
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("file", file);
            data.append("name", fileName);
            newPost.img = fileName;
            console.log(newPost);
            try {
                await axios.post("/upload", data);
            } catch (err) { 
                console.log(err)
            }
        }
        try {
            await axios.post("/posts", newPost);
            window.location.reload();
        } catch (err) { 
            console.log(err)
        }
    };
        return (
            <>
            <div className="shared-container">
                <div className="shared-wrapper">
                <div className="shared-top">
                    <img className="shared-profile-image" src={
                        user.profilePicture
                            ? PF + user.profilePicture
                            : PF + "person/no-avatar.png"
                    }
                        alt="" />
                    <input
                        placeholder={"What's on your mind " + user.username + "?"}
                        className="shared-input"
                        ref={desc}
                    />
                </div>
                <hr className="shared-row" />
                {file && (
                    <div className="share-img-container">
                        <img className="share-img" src={URL.createObjectURL(file)} alt="" />
                        <img className="share-cancel-img" src={PF + "cancel.png"} onClick={() => setFile(null)} alt="" />
                    </div>
                )}
                <form className="shared-bottom" onSubmit={submitHandler}>
                    <div className="shared-options">
                        <label htmlFor="file" className="shared-option">


                            <MdPermMedia className="shared-option-icon" />
                            <span className=" shared-option-text">Photo or Video</span>
                            <input
                                style={{ display: "none" }}
                                type="file"
                                id="file"
                                accept=".png,.jpeg,.jpg"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </label>
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
                </form>
                </div>
            </div>
            </>
        )
    
}

export default Shared
