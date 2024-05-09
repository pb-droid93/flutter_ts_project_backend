import mongoose from "mongoose";
import TweeetModel from "../database/models/tweet.model";
import { ITweetInterface } from "../database/interfaces/tweet.interface";



// get tweet 
export const getTweetRepo =async(tweedId: String):Promise<ITweetInterface | null>=>{
    try{

        const tweet = await TweeetModel.findOne({tweetId: tweedId});
        return  tweet;
    }
    catch(error){
        console.log(error);
        return null;

    }
};


//delete tweet
export const deleteTweetRepo =async(tweetId: String):Promise<boolean>=>{
    try{

        const deleted = await TweeetModel.findOneAndDelete({tweetId: tweetId});
        if(deleted){
            return true;
        }
        else{
            return false;
        }

    }
    catch(error){
        console.log(error);
        return false;

    }
};


//creating a tweet
export const createTweetRepo =async(tweet:ITweetInterface):Promise<boolean>=>{
    try{

        await TweeetModel.create(tweet);
        return true;

    }
    catch(error){
        console.log(error);
        return false;

    }
};


//update a tweet
export const updateTweetRepo =async(tweedId: string,
    updateTweet:ITweetInterface):Promise<boolean>=>{
    try{
        const result = await TweeetModel.findOneAndUpdate({tweetId: tweedId},updateTweet,{new:true});
        
        if(result){
            return true;
        }
        else{
            return false;       
        }

    }
    catch(error){
        console.log(error);
        return false;

    }
};