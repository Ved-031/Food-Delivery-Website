import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

// Creating token
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

// Login user
const loginUser = async (req, res) => {

    let { email, password } = req.body;

    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success: false, message: "User not found"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.json({success: false, message: "Incorrect credentials"});
        }
        const token = createToken(user._id);
        res.json({success: true, token});
    } 
    catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

// Register user
const registerUser = async (req, res) => {

    let { name, email, password } = req.body;

    try {

        // checking if user already exists
        const exist = await userModel.findOne({email});
        if(exist){
            return res.json({success: false, message: "User already exists"});
        }

        // validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({success: false, message: "Please enter valid email"})
        }
        if(password.length < 8){
            return res.json({success: false, message: "Please enter strong password"})
        }

        // Encrypting password
        const saltRounds = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Creating user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success: true, token})

    } 
    catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"})
    }
}

export { loginUser, registerUser }