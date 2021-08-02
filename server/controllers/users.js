
import bcrypt from "bcrypt";
import User from "../models/User.js"

//update user
export const updateUser = async (req, res) => {

    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).res.json(err)
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account has been updated")
        } catch (err) {
            return res.status(500).res.json(err)
        }
    } else {
        return res.status(403).json("You can only update your account")
    }

}

//delete user
export const deleteUser = async (req, res) => {

    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Your account has been deleted")
        } catch (err) {
            return res.status(500).res.json(err)
        }
    } else {
        return res.status(403).json("You can only delete your account")
    }

}
//get a user
export const getUser = async (req, res) => {
    const userId = req.query.userId
    const username = req.query.username
    try {
        const user = userId 
        ? await User.findById(userId)
        : await User.findOne({username: username});
        const { password, updated, ...other } = user._doc
        res.status(200).json(other)
    } catch (err) {
        return res.status(500).res.json(err)
    }
}
// follow a user
export const followUser = async (req, res) => {
    if (req.params.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push: {followers: req.body.userId}})
                await currentUser.updateOne({$push: {followings: req.body.params.id}})
                res.status(200).json("user has been followed")
            }else{
                return res.status(403).json("you already follow this user")
            }
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json(" You cant follow yourself")
    }
}

//unfollow a user
export const unfollowUser = async (req, res) => {
    if (req.params.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull: {followers: req.body.userId}})
                await currentUser.updateOne({$pull: {followings: req.body.params.id}})
                res.status(200).json("user has been unfollowed")
            }else{
                return res.status(403).json("you already unfollow this user")
            }
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json(" You cant unfollow yourself")
    }
}