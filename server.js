import express from "express";
import userRouter from "./routes/user.js"; 
import router from "./routes/app.js";

const app = express()

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

// serve static files from public folder
app.use(express.static("public"))

// mount router to start with /user and then use actual user router
app.use("/user", userRouter)
app.use(router)

// used to view html
app.set("view engine", "ejs")

app.listen(4000, () => console.log("Server running"))


