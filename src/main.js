const dotEnv = require('dotenv');
dotEnv.config();
const express = require("express")
const { config } = require("./config")
const userRouter = require("./users/infraestructure/http/user-routes");
const morgan = require('morgan');


function runServer(){
    const app = express()

    app.use(express.json())
    app.use(morgan("dev"))
    app.use("/users",userRouter )


    app.get("/", (req,res) =>{
        res.status(200).send({
            msg: "API"
        })
    })

    const { port } = config.server;

    app.listen(port, () => {
        console.log(`[APP] - Starting application on port ${port}`);
    });
    
}

runServer()