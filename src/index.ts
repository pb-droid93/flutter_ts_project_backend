import express, { Express } from "express";
import http from "http"
import cors from "cors"
import dotenv from "dotenv"
import bodyParser, { json } from "body-parser";
import { join } from "path";
import router from "./routes/routes";
import mongoose from "mongoose";
import { error } from "console";

const app: Express = express();

const server =  http.createServer(app)

// express configuration 
app.use(cors());
app.use(bodyParser,json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("PORT", 3000)
app.set("BASE_URL","localhost")


dotenv.config()

// define routes 
app.use("/api/v1",router)

// mongo conncetion
const mongoUrl = process.env.MONGO_DB_URI;

if(!mongoUrl){
    console.error("mongo db url not defind") 
    process.exit(1);
}

mongoose.connect(mongoUrl,{}).then(()=>{
    console.log("mongo db is connecte");
})
.catch((error)=>{

    console.log(error);
});

//start the server
try{
    const port : Number = app.get("PORT")
    const baseUrl : String = app.get("BASE_URL")
    server.listen(port,(): void => {
        console.log("server listening");
    })
}catch(error){
    console.log(error);

}

export default server;
