import { Router } from "express"
import { UserController } from "../controller/user.controller"

const usercontroller = new UserController()
const router = Router()

router.post("/api/signup", usercontroller.userSignup)

export default router