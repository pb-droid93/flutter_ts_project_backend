"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tweet_controller_1 = require("../controllers/tweet.controller");
const tweeetRouter = (0, express_1.Router)();
// define route path 
tweeetRouter.get("/:tweetId", tweet_controller_1.getTweetController);
// tweeetRouter.get("/",getAllTweetController)
tweeetRouter.post("/", tweet_controller_1.createTweetController);
tweeetRouter.delete("/:tweetId", tweet_controller_1.deleteTweetController);
tweeetRouter.put("/", tweet_controller_1.updateTweetController);
exports.default = tweeetRouter;
