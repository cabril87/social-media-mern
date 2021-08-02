import mongoose from "mongoose";
import isEmail from 'validator/lib/isEmail';



const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        max: 50, 
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, ' Minimum password length is 6 characters'],
    },
    username: {
        type: String,
        required: [true, 'Please enter username'],
        min: [3, ' Minimum username length is 6 characters'],
        max:[20, ' Maximum username length is 20 characters'],
        unique: true,
    },
    profilePicture:{
        type: String,
        default: "",
    },
    coverPicture:{
        type: String,
        default: "",
    },
    followers:{
        type: Array,
        default: [],
    },
    followings:{
        type: Array,
        default: [],
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        max: 50
    },
    city: {
        type: String,
        max: 50
    }, 
    from: {
        type: String,
        max: 50
    },
    relationship: {
        type: Number,
        enum: [1,2,3]
    }

},
{timestamps:true}
);

export default mongoose.model("User", UserSchema)