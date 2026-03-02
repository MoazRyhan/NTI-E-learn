import express from "express"
import dotenv from "dotenv"
import DateBase from "./DB/connection.js"
import User from "./DB/models/user.model.js"
import routerHandler from "./utils/routerHandler.js"
import { verifyEmailTransporter } from "./utils/email.utils.js"
import { notFound } from "./middlewares/notFound.middleware.js"
import { errorHandler } from "./middlewares/errorHandler.middleware.js"

dotenv.config()



const bootstrap = () => {

    const app = express()

    // ======================== SEC 🔐

    
    // test prod
    
    //DB
    DateBase()


    // Verify email transporter
    verifyEmailTransporter()

    // routers
    routerHandler( app , express )





    // 404 handler - must be before error handler
    app.use(notFound);
    

    // Global error handler - must be last
    app.use( errorHandler )

     const server = app.listen( process.env.PORT ,  ( error ) =>{

    console.log( `server is running ${ process.env.PORT }
         ${ JSON.stringify( server.address() ) }  ` );
        
    } )


}


export default bootstrap