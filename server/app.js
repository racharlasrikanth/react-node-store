require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

// database
const connectDB = require("./db/connect");

// product routers
const productRouter = require("./routes/productRoutes");

// error hander
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

// default middlewares mandatory for access req.body
app.use(express.json());

app.get("/", (req, res) => {
    res.send('file upload');
})

app.use("/api/v1/products", productRouter);

// middleswares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const PORT = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('CONNECTED...');

        app.listen(PORT, () => {
            console.log(`Server listening at PORT: ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();