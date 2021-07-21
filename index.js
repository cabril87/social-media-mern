const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan")
const PORT = 4000
const app = express();
const userRoute = require("./routes/users")
const userAuth = require("./routes/auth")

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connected to MongoDB")
});

//Middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"))

app.use("/api/users", userRoute)
app.use("/api/auth", userAuth)




app.listen(PORT, () => {
    console.log(`Server is run on port ${PORT}` )
})