import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import createCat from "./routes/createCat.js";
import readCat from "./routes/readCat.js";
import updateCat from "./routes/updateCat.js";
import deleteCat from "./routes/deleteCat.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/cats", createCat);
app.use("/api/cats", readCat);
app.use("/api/cats", updateCat);
app.use("/api/cats", deleteCat);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🐱 Server running on port ${PORT}`));
