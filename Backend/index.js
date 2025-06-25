import express from "express";
import {PORT} from "./config.js";

const app = express();

app.listen(PORT, ()=> {
    console.log(`Every Thing is ok to port: ${PORT}`)

});