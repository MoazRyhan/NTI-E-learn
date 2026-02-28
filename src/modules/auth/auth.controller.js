import * as AuthService from "./services/auth.service.js"
import { asyncHandler } from './../../utils/asyncHandler.js';
import { createResponse } from "../../utils/APIResponse.js";


export const register = asyncHandler( async ( req , res ) =>{

    const user = await AuthService.registerUser(req.body )

    res.status(201).json(  createResponse(user , "User has been created" )  )

})