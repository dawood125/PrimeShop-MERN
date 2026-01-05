const cookieParser = require("cookie-parser");
const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");


mongoose
  .connect(
    "mongodb+srv://dawoodbhatti8812_db_user:LYiWURXbqvdKG0SP@cluster0.8ewtyc8.mongodb.net/Ecommerce"
  )
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
