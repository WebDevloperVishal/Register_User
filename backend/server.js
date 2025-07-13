import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config({ path: '../.env' , quiet : true });

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello everyone");
});

app.use("/api/users", userRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is ready at port ${PORT}`);
});