import express from "express"
import cors from "cors"
import moviesRouter from "./routes/movies.route.js"
import purchaseRouter from "./routes/purchase.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/movies", moviesRouter)
app.use("/api/purchase", purchaseRouter)

app.listen(8000, () => {
    console.log("Server is running on port 8000")
})