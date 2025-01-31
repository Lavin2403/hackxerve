import { Router } from "express";
import handler from 'express-async-handler';
import { UserModel } from "../Models/user.model.js";
import { BAD_REQUEST } from "../constants/httpStatus.js";
import bcrypt from "bcryptjs";

const loginRouter = Router();
loginRouter.post('/login', 
    handler(async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({username});
    if (user &&await bcrypt.compare(password,user.password)) {
        return res.status(200).json({ success: true, message: "Login successful" });;
    }
    res.status(BAD_REQUEST).send('Username or password is invalid');
}));

export default loginRouter;