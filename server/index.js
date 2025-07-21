import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000

const corsOptions = {
    origin: true // allows any domain to access server for now
}


// middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

//health check
app.get('/', (req, res) => res.send('Server is Live!'))


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
