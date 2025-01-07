import { UserModel } from "../model/user.model";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";
import { Request, Response } from "express";
export class UserController {

    async userSignup(req: Request, res: Response) {
        try {
            const { username, password } = req.body

            
        } catch (error) {

        }
    }
}