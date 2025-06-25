import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (request, response)=>{
    console.log(request)
    return response.status(234).send("Welcome to MERN App")

});

app.listen(PORT, ()=> {
    console.log(`Every Thing is ok to port: ${PORT}`)

});

mongoose
  .connect(mongoDBURL)
  .then(()=>{

  })
  .catch(()=>{
    
  })