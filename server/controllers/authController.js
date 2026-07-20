import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const  loginUser=async(req, res,next) =>{
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
res.json({
    success:true,
    email
});

if (!isMatch) {
    return res.status(401).json({
        message: "Invalid password"
    });
}
const token =jwt.sign(
            {id:user_id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"7d"
            }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user
        });

        
    } catch (error) {
               next(error);

    }
};


export const registerUser = async (req, res,next) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }
const hashedPassword =await bcrypt.hash(password,10);

        const newUser = await User.create({
            username,
            email,
            password:hashedPassword
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: newUser
        });

    } catch (error) {
               next(error);

    }
};













