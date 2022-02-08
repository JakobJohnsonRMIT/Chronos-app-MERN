import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>hello</h1>");
});

app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});