import { Router } from "express";
import {getTweetController,createTweetController,updateTweetController,deleteTweetController} from "../controllers/tweet.controller";

const tweeetRouter = Router();


// define route path 

tweeetRouter.get("/:tweetId",getTweetController)
// tweeetRouter.get("/",getAllTweetController)
tweeetRouter.post("/",createTweetController)
tweeetRouter.delete("/:tweetId",deleteTweetController)
tweeetRouter.put("/",updateTweetController)


export default tweeetRouter
