# MERN_Book_Store

MERN  
M(MogoDB): A noSQL Database.  
E(ExpressJS): A Web Freamwork.  
R(ReactJS): UI Building JavaScript Library.  
N(NodeJs): Serve side JavaScript Environment.

## initial File setup:
```
project
│
├── Backend      # Node.js, Express, MongoDB backend code
├── Frontend     # React.js frontend code
├── .gitignore   # Git ignored files and directories
└── Redme.md     # Project documentation (this file)
```

---

### Backend SetUp:

```bash
cd Backend
```

In the terminal of backend:

```bash
npm init -y   # adds a package.json to our project
```

Next, add express and nodemon:

```bash
npm i express nodemon
```

Make some changes in `package.json`:

```json
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
```

Create `index.js` & `config.js`.

To test the server, in `index.js`:

```js
// Import the express module to create the server
import express from "express";

// Import the PORT value from a separate config file
import { PORT } from "./config.js";

// Create an instance of an Express application
const app = express();

/*
  Define a route for the root URL ("/")
  - request: contains data about the incoming HTTP request
  - response: used to send data back to the client
*/
app.get("/", (request, response) => {
    console.log(request); // Logs the request object (for debugging purposes)
    
    // Sends a response with status code 234 and a welcome message
    return response.status(234).send("Welcome to MERN App");
});

/*
  Start the server and listen on the specified port
  - Once the server starts, a message is logged to confirm it's running
*/
app.listen(PORT, () => {
    console.log(`Everything is ok to port: ${PORT}`);
});

```

In `config.js`:

```js
export const PORT = 5555;
```

**Output in bash:**
```
Every Thing is ok to port: 5555
```
**Output in Browser:**
```
Welcome to MERN App
```

Congratulations, you are all set up!

## Adding a Database

To connect your MERN Book Store project to a free online MongoDB database, follow these steps:

### 1. Create a Free MongoDB Cluster

- Go to [mongodb.com](https://www.mongodb.com/)
- Complete the signup or log in to your account.
- Create a free cluster.

### 2. Create a Database User

- Set up a database user with a username and password.
- Copy the connection string provided by MongoDB. It will look similar to this:

  ```
  mongodb+srv://Surajit:<db_password>@mern-bookstore.qjleocp.mongodb.net/?retryWrites=true&w=majority&appName=MERN-BookStore
  ```

- Replace url with your actual connection string.

### 3. Add the Connection String to `config.js`

Ipdate your `config.js` in the root of your backend:

```js
export const mongoDBURL = 'mongodb+srv://Surajit:<db_password>@mern-bookstore.qjleocp.mongodb.net/?retryWrites=true&w=majority&appName=MERN-BookStore';
```

_Remember to replace `<db_password>` with your actual password._

### 4. Import the Connection String in `index.js`

At the top of your `index.js`, import the database URL:

```js
import { mongoDBURL } from "./config.js";
```

### 5. Install Mongoose

Mongoose is the library used to interact with MongoDB. Install it in your backend directory:

```bash
npm install mongoose
```

### 6. Connect to MongoDB in `index.js`

Add the following code to your `index.js` to establish a connection with MongoDB:

```js
import mongoose from "mongoose";
import { mongoDBURL } from "./config.js";

// Attempt to connect to the MongoDB database using the connection string (URL)
mongoose
  .connect(mongoDBURL) // mongoDBURL should be a string like: "mongodb://localhost:27017/myDatabase"
  
  // If the connection is successful, the `.then()` block will execute
  .then(() => {
    // You can write code here to execute after a successful connection
    console.log("Connected to MongoDB successfully");
  })

  // If there is any error during connection, the `.catch()` block will execute
  .catch((error) => {
    // You can log the error or handle it appropriately
    console.error("Error connecting to MongoDB:", error);
  });
```

---

You are now ready to use MongoDB with your MERN Book Store project!

# little Break !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
