import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const register = async(req, res, next) => {
    try{

        const hash = bcrypt.hashSync(req.body.password, 5);

        const newUser = new User({
            ...req.body,
            password: hash
        });

        // const newUser = new User({
        //     username: 'test',
        //     email: 'test',
        //     password: 'test',
        //     country: 'test'
        // })

        await newUser.save();

        res.status(201).send("User has been created");

    }catch(err){
        // res.status(500).send("Something went wrong")
        next(err)
    }
}


export const login = async (req, res, next) => {
    try{
        const user = await User.findOne({username: req.body.username});

        // const err = new Error();
        // err.status = 404;
        // err.message = "User does not exist"
        if(!user) return next(createError(404, "User does not exist"));

        
        // if(!user) return res.status(404).send("User not found");
        // if(!user) return next(err);

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        // if(!isCorrect) return res.status(400).send("Wrong password or username");
        if(!isCorrect) return next(createError(404, "wrong password and username"));
    

        //create token
        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller
        },process.env.JWT_SECRET)

        const {password, ...info} = user._doc;

        res.cookie("accessToken",token).status(200).send(info);

     

    }catch(err){
        // res.status(500).send("Something went wrong")
        next(err)
    }
}