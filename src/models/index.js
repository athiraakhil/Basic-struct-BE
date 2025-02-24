import { sequelize } from "../../config/database.js";

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: false, force: false }); // Syncs all models
    console.log("All tables synced successfully.");
  } catch (error) {
    console.error("Database sync error:", error);
  }
};

export { sequelize, syncDatabase };
