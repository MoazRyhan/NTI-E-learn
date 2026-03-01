import express from "express"
import * as AuthController from "./auth.controller.js"
const authRouter = express.Router()


authRouter.post( "/register"  , AuthController.register )

authRouter.post( "/login"  , AuthController.login )

authRouter.post( "/refresh-token"  , AuthController.refreshToken )

authRouter.post('/forgot-password', AuthController.forgotPassword);

authRouter.get('/reset-password/:token', AuthController.resetPassword);


// authRouter.post('/logout',  authenticate , AuthController.logout);
export default authRouter