const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

dotenv.config();

connectDatabase();

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})