require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
const express = require("express");
const cors = require("cors");

const parts = require("./routes/parts");
const jobs = require("./routes/jobs");
const quotes = require("./routes/quote")

const app = express();
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(parts);
app.use(jobs);
app.use(quotes);
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Sever is up and listening on port ${PORT}`);
});
