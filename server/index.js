const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require('cors')
const PORT = process.env.PORT || 4000
const app = express();
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

dotenv.config()

app.use(express.json());
app.use(helmet());
app.use(morgan("common"))
app.use(cors())

//Middleware
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {
        console.log(`Server is run on port ${PORT}` )
    }))
    .catch((error) => console.log(error.message))
    // console.log("Connected to MongoDB")

mongoose.set("useFindAndModify", false)





