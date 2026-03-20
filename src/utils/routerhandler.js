import authRouter from "../modules/auth/auth.routes.js"
import userRouter from "../modules/users/user.routes.js"



const routerHandler = async ( app , express ) => {

    app.use( express.json( ) )
    app.use("/auth" , authRouter )
    app.use( "/users" , userRouter  )


    app.use( "/{*any}"  , ( req , res ) =>{
        res.status(404).json({ message : "this Router is not found" })
    } )

}


export default routerHandler