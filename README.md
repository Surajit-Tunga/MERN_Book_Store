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
import express from "express";
import { PORT } from "./config.js";

const app = express();

app.listen(PORT, () => {
    console.log(`Every Thing is ok to port: ${PORT}`);
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