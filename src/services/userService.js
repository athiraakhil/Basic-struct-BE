import { User } from "../models/User.js";

export async function createUser(req) {
    const postData = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    };
    const user = await User.create(postData);
    return user;
  }