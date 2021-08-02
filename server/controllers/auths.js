import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const handleErrors = (err) => {
    console.log(err.message, err.code)
    let errors = {email: '', password: '', username: ''}

    // duplicate
    if(err.code === 11000){
        errors.email = 'that email is already registered'
        return errors
    }

    //validation errs
    if(err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
        })
    }
    return errors
}


const createToken = (id) => {
    return jwt.sign({id}, 'secret media', {
        expiresIn: '1h'
    })
}


//register
// export const registerGet = async (req, res) => {
//     try {
//         //generate new password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(req.body.password, salt)

//         //create new user
//         const newUser = await new User({
//             username: req.body.username,
//             email: req.body.email,
//             password: hashedPassword,
//         });
//         //save user and respond
//         const user = await newUser.save()
//         res.status(200).json(user)
//     } catch (err) {
//         res.status(500).json(err)
//     }
// }
export const registerPost = async (req, res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        //create new user
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        //save user and respond
        // const user = await newUser.save()
        const token = createToken(user._id)
        res.cookie('jwt', token, {httpOnly: true, maxAge: 3 * 1000})
        res.status(200).json({user: user._id})
    } catch (err) {
        const errors = handleErrors(err)
        res.status(500).json(errors)
    }
}
//login
export const loginGet = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        !user && res.status(404).json("user not found")

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("wrong password")

        res.status(200).json(user)

    } catch (err) {
        res.status(500).json(err)
    }
}
export const loginPost = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        !user && res.status(404).json("user not found")

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("wrong password")

        res.status(200).json(user)

    } catch (err) {
        res.status(500).json(err)
    }
}
//logout
export const logout = async (req, res) => {
    try {
        res.cookie('jwt', '', {maxA})

    } catch (err) {
        res.status(500).json(err)
    }
}