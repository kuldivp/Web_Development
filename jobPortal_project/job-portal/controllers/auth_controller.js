import user_model from "../models/user_model.js";

export const register_controller = async (req, res, next) => {
  const { name, email, password } = req.body;

  // Validate input
  // if (!name) {
  //   return next("Please provide your name");
  // }

  // if (!email) {
  //   return next("Please provide your email");
  // }

  // if (!password) {
  //   return next("Please provide your password");
  // }


  //   const existing_user = await user_model.findOne({ email });
    
  //   if (existing_user) {
  //     return next("Email is already registered. Please login or signup");
  //   }

    // Creating new user if not in DB
    const user = await user_model.create({
      name,
      email,
      password,
    });

    return res.status(201).send({
      success: true,
      message: "User created successfully",
      user,
    });

  }
