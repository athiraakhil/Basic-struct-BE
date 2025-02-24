import express, { json, urlencoded} from "express";
import pkg from 'body-parser';
const { json: _json } = pkg;
import cors from "cors";
import usersRoute from "./src/routes/userRoutes.js";
import { syncDatabase } from "./src/models/index.js";

const app = express();

app.use(cors()); // Enable CORS for all routes

app.use(_json());

// Routes
app.use("/Basic", usersRoute);
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Path does not found, try again' });
  });

app.use(json()); // Parse JSON requests
app.use(urlencoded({ extended: true })); // Parse URL-encoded data


import { sequelize } from "./src/models/index.js";
sequelize.sync();

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await syncDatabase(); // Sync all models on startup
});
