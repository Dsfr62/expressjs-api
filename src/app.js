import express from "express"

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({"msg":"Hello world"})
})

app.get("/:id", (req, res) => {
    const id = req.params.id
    res.status(200).json({"msg": id})
})

app.post("/", (req, res) => {
    const data = req.body
    res.status(200).json(data)
})

export default app