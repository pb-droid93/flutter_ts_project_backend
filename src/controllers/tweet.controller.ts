import { Request, Response } from "express";
import { getTweetRepo, createTweetRepo, deleteTweetRepo, updateTweetRepo} from "../repositories/tweet.repository";
import { ITweetInterface } from "../database/interfaces/tweet.interface";
import { updateUserRepoWithTweetId } from "../repositories/user.repository";

export const getTweetController = async(req: Request, res:Response)=>{

    const tweetId = req.params.userId as string;

    try{
        const  tweet = await getTweetRepo(tweetId);

        if(tweet){
            res.status(200).json({data:tweet});

        }
        else{
            res.status(500).json({error: "tweet not found!!"});
        }

    }
    catch(error){
        console.log(error);
        res.status(500).json({error: error});
    }
}

export const createTweetController = async(req: Request, res: Response)=>{

    const tweet: ITweetInterface = req.body;
    try{
        const  success = await createTweetRepo(tweet);
        if(success){
            const userUpdateScuccess = await updateUserRepoWithTweetId(tweet.adminId, tweet.tweedId)
            if(userUpdateScuccess){
                res.status(200).json({data:tweet});

            }
            else{
                res.status(500).json({error:"user not updated"});
 
            }
        }
        else{
            res.status(500).json({error:"tweet not created"});
        }

    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error});
    }

}

export const updateTweetController = async(req: Request, res: Response)=>{

    const updateTweet: ITweetInterface = req.body;
    try{
        const  success = await updateTweetRepo(updateTweet.tweedId, updateTweet);
        if(success){
            res.status(200).json({data:"tweet updated"});
        }
        else{
            res.status(500).json({error:"tweet not updated"});
        }

    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error});
    }

}


export const deleteTweetController = async(req: Request, res: Response)=>{

    const tweetId= req.params.tweedId as string;
    try{
        const  success = await deleteTweetRepo(tweetId);
        if(success){
            res.status(200).json({data:tweetId});
        }
        else{
            res.status(500).json({error:"tweet not deleted"});
        }

    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error});
    }

}