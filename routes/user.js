import express from "express";

// make router
const userRouter = express.Router()

userRouter.get("/", (req, res) => {
    res.status(200).send("All users retreieved")
})

userRouter.route("/:id")

.get((req, res) => {
    const id = req.params.id
    res.status(200).send(`Retreieved user with id:${id} of name ${req.user}`)
})

.put((req, res) => {
    const id = req.params.id
    res.status(200).send(`Updated user with id:${id} of name ${req.user}`)
})

.delete((req, res) => {
    const id = req.params.id
    res.status(200).send(`Deleted user with id:${id} of name ${req.user}`)
})

// middleware 
const users = ["Anav", "Indeevar", "Rohan"]
userRouter.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

export default userRouter