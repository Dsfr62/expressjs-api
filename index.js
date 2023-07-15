import app from "./src/app.js"

const port = 8000

app.listen(port, () => {
    console.log(`the app is listening on port ${port}\nurl: http://localhost:${port}`)
})
