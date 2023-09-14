const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./database/database.js");
const ContactRoute = require("./routes/Contact.js");
const multer = require("multer");
const path = require("path");

const app = express();
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json());

app.use("/upload", express.static(path.join(__dirname, "/upload")));

//upload image

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json({ status: "SUCCESS", msg: "Image has been uploaded" });
});

app.use("/api/contact", ContactRoute);

app.listen(process.env.PORT, () => {
  console.log("App is running " + process.env.PORT);
  connectDB();
});
