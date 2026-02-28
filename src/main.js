import express from "express"
import dotenv from "dotenv"
import DateBase from "./DB/connection.js"
import User from "./DB/models/user.model.js"
import routerHandler from "./utils/routerHandler.js"

dotenv.config()



const bootstrap = () => {

    const app = express()



    //DB
    DateBase()

    // routers
    routerHandler( app , express )



    // test prod

    
     const server = app.listen( process.env.PORT ,  ( error ) =>{

    console.log( `server is running ${ process.env.PORT }
         ${ JSON.stringify( server.address() ) }  ` );
        
    } )


}


export default bootstrap