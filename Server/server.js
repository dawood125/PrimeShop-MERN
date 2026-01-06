const cookieParser = require("cookie-parser");
const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const dotenv=require("dotenv");

dotenv.config(); 

mongoose
  .connect(process.env.CONN_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

// dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: " http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Set-Cookie",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
  console.log(`Server is now running on port ${port}`);
});
