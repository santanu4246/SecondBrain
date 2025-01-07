import { UserModel } from "../model/user.model";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";
import { Request, Response } from "express";

export class UserController {

    async userSignup(req: Request, res: Response) {
        try {
            const { username, password } = req.body
            console.log(username,password);
            
            await UserModel.create({
                username,
                password
            })
            res.status(200).json({ msg: "user created" })
        } catch (error) {
            res.status(401).json({ error: error })
        }
    }
}