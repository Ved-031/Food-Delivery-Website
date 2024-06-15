import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/food-controller.js';
import multer from 'multer';
import crypto from 'crypto';
import path from 'path';

const foodRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        crypto.randomBytes(12, (err, bytes) => {
            cb(null, `${bytes.toString("hex")}${path.extname(file.originalname)}`);
        })
    }
})

const upload = multer({ storage:storage });

foodRouter.post('/add', upload.single("image"), addFood);
foodRouter.get('/list', listFood);
foodRouter.post('/remove', removeFood);

export default foodRouter