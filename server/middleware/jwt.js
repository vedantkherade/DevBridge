import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const vertifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    console.log(token);
    // if(!token) return res.status(401).send("You are not authenticated!");
    if(!token) return next(createError(401, "You are not authenticated!"));

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
       
        // User._id is a object hence we need to convert it into a string
        // if(err) return res.status(403).send("Token is not valid");
        if(err) return next(createError(403, "Token is not valid"));

        req.userId = payload.id;
        req.isSeller = payload.isSeller;

        next();
    })


}