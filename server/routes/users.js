import express from 'express';
import { updateUser, deleteUser, getUser, followUser, unfollowUser} from "../controllers/users"

const router = express.Router();

router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/", getUser)
router.put("/:id/follow", followUser)
router.put("/:id/follow", unfollowUser)


export default router