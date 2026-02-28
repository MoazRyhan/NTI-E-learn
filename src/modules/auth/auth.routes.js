import express from "express"
import * as AuthController from "./auth.controller.js"
const authRouter = express.Router()


authRouter.post( "/register"  , AuthController.register )




export default authRouter