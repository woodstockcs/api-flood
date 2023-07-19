import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import routes from "./routes/posts.js";

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

app.use("/api", routes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


//start with node index.js