import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';

// app config
const app = express();
const PORT = 3000;

//middlewares
app.use(express.json());
app.use(cors());

//db connection
connectDB();

app.get('/', (req,res)=>{
    res.send("API Working");
})

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})