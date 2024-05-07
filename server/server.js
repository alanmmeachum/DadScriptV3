import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/mongoose.config.js";
import router from "./routes/blog.routes.js";

import path from "path";
import { fileURLToPath } from "url";

//Resolving dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

const app = express();

app.use(express.json(), cors());
app.use("/api", router);
dotenv.config();

//Use the client app
app.use(express.static(path.join(__dirname, "/client/dist")));

//Render client
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/dist/index.html"))
);

dbConnect();
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));
