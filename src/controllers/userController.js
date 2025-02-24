import { createUser } from "../services/userService.js";

export const createUsers = async (req, res) => {
    try {
      const user = await createUser(req);
      res.status(201).json({
        message: "User created successfully",
        data: user,
      });
    } catch (error) {
      res.status(401).json({ message: error.parent.detail });
    }
  };

