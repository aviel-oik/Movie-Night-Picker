import express from "express"
import cors from "cors"
import moviesRouter from "./routes/movies.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/movies", moviesRouter)

app.listen(8000, () => {
    console.log("Server is running on port 8000")
})