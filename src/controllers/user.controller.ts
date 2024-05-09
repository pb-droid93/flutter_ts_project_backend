import { Request, Response } from "express";
import { getUserRepo, createUserRepo, deleteUserRepo, updateUserRepo} from "../repositories/user.repository";
import { IUserInterface } from "../database/interfaces/user.interface";


export const getUserController = async(req: Request, res:Response)=>{

    const userId = req.params.userId as string;

    try{
        const  user = await getUserRepo(userId);

        if(user){
            res.status(200).json({data:user});

        }
        else{
            res.status(500).json({error: "user not found!!"});
        }

    }
    catch(error){
        console.log(error);
        res.status(500).json({error: error});
    }
}

export const createUserController = async(req: Request, res: Response)=>{

    const user: IUserInterface = req.body;
    try{
        const  success = await createUserRepo(user);
        if(success){
            res.status(200).json({data:user});
        }
        else{
            res.status(500).json({error:"user not created"});
        }

    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error});
    }

}


export const updateUserController = async(req: Request, res: Response)=>{

    const updateUser: IUserInterface = req.body;
    try{
        const  success = await updateUserRepo(updateUser.uid, updateUser);
        if(success){
            res.status(200).json({data:"user updated"});
        }
        else{
            res.status(500).json({error:"user not updated"});
        }

    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error});
    }

}


export const deleteUserController = async(req: Request, res: Response)=>{

    const userId= req.params.userid as string;
    try{
        const  success = await deleteUserRepo(userId);
        if(success){
            res.status(200).json({data:userId});
        }
        else{
            res.status(500).json({error:"user not deleted"});
        }

    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error});
    }

}

