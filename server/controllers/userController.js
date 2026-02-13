import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import userModel from "../models/userModel.js";
import createError from "../utils/createError.js";


export const deleteUser = async(req, res) => {
    
    const user = await User.findById(req.params.id);

    console.log("req.userId", req.userId);
    console.log("user._id.toString()", user._id.toString());
 
    if(req.userId !== user._id.toString()){
        // return res.status(403).send("You can delete only your account");
        return next(createError(403, "You can delete your account"));
    }

    await User.findByIdAndDelete(req.params.id);

    res.status(200).send("deleted");



    // const token = req.cookies.accessToken;
    // if(!token) return res.status(401).send("You are not authenticated!");

    // jwt.verify(token, process.env.JWT_SECRET, async(err, payload) => {
        
    //     // User._id is an object hence we need to convert it into a string
    //     if(payload.id !== user._id.toString()){
    //         return res.status(403).send("You can delete only your account")
    //     }

    //     await User.findByIdAndDelete(req.params.id)

    //     res.status(200).send("deleted");
    // })

}

export const getUser = async(req, res, next) => {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
}
