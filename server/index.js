import express from "express";
import cors from "cors";

import connectDatabase from "./db/index.js";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>hello</h1>");
});

app.listen(process.env.PORT, () => {
    console.log("Server is listening on port 4000");
    connectDatabase();
});