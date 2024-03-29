import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit:'30mb', extended: true }))
app.use(cors())
app.use('/posts', postRoutes);
//const CONNECTION_URL = 'mongodb+srv://MERN_App:CtgYKBNTHiKs6gpl@cluster0.ovnqwgj.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running in port : ${PORT}`)))
    .catch((error) => console.log(error))
