import express from "express"
import postRoutes from "./routes/auth.js"
import postRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"

const app = express()

app.use(express.json())
app.use("/api/posts", postRoutes)

/* app.get("/test", (req, res)=>{
    res.json("Funciona Carajo")
}) */

app.listen(8800,()=>{
    console.log("Conectado")
})