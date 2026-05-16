const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const contactRoute = require("./routes/contact");

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "https://portfolio-nine-blush-otv5mvdfzh.vercel.app/",
    credentials: true
  })
);


app.use("/api/contact", contactRoute);

app.get("/", (req, res) => {
  res.send("Server Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});