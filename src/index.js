// require('dotenv').config({path: './.env'})
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

import {app} from "./app.js"
import connectDB from "./db/index.js";

connectDB()
.then(() => {
    app.on("error", (err) => {
        console.log(`Error : `, err)
        throw err
    })
    app.listen(process.execArgv.PORT || 8000, () => {
        console.log(` Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
})











/*
import express from "express"
const app = express()
;( async () => {
    try {
        await mongoose.connnect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error:", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("Error: ", error)
        throw err
    }
})()

*/