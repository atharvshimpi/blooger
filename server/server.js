import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"

import userRoutes from "./routes/user.js"
import blogRoutes from "./routes/blogs.js";

const app = express();

// environment variable config
dotenv.config();

// Bodyparser middleware
app.use(cors());

app.use(
  bodyParser.json({
  limit: '100mb',
  extended: true
}));

app.use(
  bodyParser.urlencoded({
    limit: '100mb',
    extended: true
  })
);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useFindAndModify: false 
})
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send("Welcome to Blooger API!");
});

app.use("/users", userRoutes);
app.use("/blogs", blogRoutes);

app.listen(process.env.PORT, () => console.log(`Server up and running on port ${process.env.PORT} !`));