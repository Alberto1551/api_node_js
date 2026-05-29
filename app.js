import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import conectarDB from "./config/db.js";

const app = express();

dotenv.config();

conectarDB();

app.get("/", (req, res) => {
    res.send("hola mundo");
});

app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`escucha desde el puerto ${PORT}`);
});

