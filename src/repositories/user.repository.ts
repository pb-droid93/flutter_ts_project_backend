import mongoose from "mongoose";
import UserModel from "../database/models/user.model";
import { IUserInterface } from "../database/interfaces/user.interface";


// get user 
export const getUserRepo =async(userdId: String):Promise<IUserInterface | null>=>{
    try{

        const user = await UserModel.findOne({uid: userdId});
        return  user;
    }
    catch(error){
        console.log(error);
        return null;

    }
};


//delete user
export const deleteUserRepo =async(userdId: String):Promise<boolean>=>{
    try{

        const deleted = await UserModel.findOneAndDelete({uid: userdId});
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


//creating a user
export const createUserRepo =async(user:IUserInterface):Promise<boolean>=>{
    try{

        await UserModel.create(user);
        return true;

    }
    catch(error){
        console.log(error);
        return false;

    }
};


//update a user
export const updateUserRepo =async(userdId: string,
    updateUser:IUserInterface):Promise<boolean>=>{
    try{
        const result = await UserModel.findOneAndUpdate({uid: userdId},updateUser,{new:true});
        
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


// update a user with new tweetid

export const updateUserRepoWithTweetId = async(
    userdId: string,
    tweedId: string

): Promise<boolean> =>{

    try{
        const result= await UserModel.findOneAndUpdate(
            {uid: userdId},
            {$push:{tweets:tweedId}}
        )

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


// update a user with new tweetid

export const deleteUserRepoWithTweetId = async(
    userdId: string,
    tweedId: string

): Promise<boolean> =>{

    try{
        const result= await UserModel.findOneAndUpdate(
            {uid: userdId},
            {$pull:{tweets:tweedId}}
        )

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
    
