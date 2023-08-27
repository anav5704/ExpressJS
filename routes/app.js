import express from "express";

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).send("Hello, welcome to express hub!")
})

router.get("/download", (req, res) => {
    res.status(200).download("server.js")
})

router.get("/viewdynamic", (req, res) => {
    res.status(200).render("index", { text : "Hello World"})
})

export default router