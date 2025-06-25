# MERN_Book_Store

MERN 
M(MogoDB): A noSQL Database.
E(ExpressJS): A Web Freamwork.
R(ReactJS): UI Building JavaScript Library.
N(NodeJs): Serve side JavaScript Environment.

initial File setup:
project--
      - Backend
      - Frontend
      -.gitignore
      -Redme.md

Backend SetUp:

cd Backend

Inthe terminal of backend:
 npm init - y   //adds a package that json to our project

 next add express and nodemon 

 npm i express nodemon

 make some changes in package.json

 {
  "name": "backend",
  "version": "1.0.0",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^5.1.0",
    "nodemon": "^3.1.10"
  }
}


make index.js & config.js 

to test the server
in index.js

import express from "express";
import {PORT} from "./config.js";

const app = express();

app.listen(PORT, ()=> {
    console.log(`Every Thing is ok to port: ${PORT}`)

});

in config.js 

export const PORT = 5555;

output in bash:

Every Thing is ok to port: 5555
