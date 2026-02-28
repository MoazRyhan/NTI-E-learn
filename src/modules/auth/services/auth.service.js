import User from "../../../DB/models/user.model.js"
import { createConflictError } from "../../../utils/APIErrors.js"
import { hashPassword } from "../../../utils/password.utils.js"


export const registerUser = async ( userData ) =>{

    const existUser =  await User.findOne( { email : userData.email } )
    if (existUser) {
        throw createConflictError("email is exist")      
    }


    const hash_Password = await hashPassword( userData.password )

    const user = await User.create( { ...userData 
        , password : hash_Password
     } )

    return user


}