import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from 'cors';
import multer from "multer";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";
import path from 'path';

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config()

app.use(express.json());
app.use(helmet());
app.use(morgan("common"))
app.use(cors())
app.use("/images", express.static(path.join(__dirname, "public/images")));

//Middleware
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)
app.use("/api/users", userRoute)


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File uploded successfully");
    } catch (error) {
        console.error(error);
    }
});

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => {
        console.log(`Server is run on port ${PORT}`)
    }))
    .catch((error) => console.log(error))


mongoose.set('useCreateIndex', true);
mongoose.set("useFindAndModify", false)





