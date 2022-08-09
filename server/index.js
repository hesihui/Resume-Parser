import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import candidateRoutes from './route/candidates.js';

// init express app
const app = express();
dotenv.config();

app.use('/candidates', candidateRoutes);

app.use(bodyParser.json({ limit: "15mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "15mb", extended: true }));
app.use(cors());

// need extra .env file to config db and port
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() =>  app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
    .catch((error)=> console.log(error.message));
