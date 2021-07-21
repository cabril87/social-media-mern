const router = require("express").Router();
const bcrypt= require("bcrypt")

//update user

router.put("/:id", async (req,res) => {
   
        if(req.body.userId === req.params.id || req.user.isAdmin){
            if(req.body.password){
                try{
                    const salt = await bcrypt.genSalt(10);
                }catch(err){
                    
                }
            }
        }else{
            return res.status(403).json("You can only update your account")
        }
    
})

//delete user

//get a user

// follow a user

//unfollow a user


router.get("/", (req,res) => {
    res.send("Welcome to user page")
})


module.exports = router