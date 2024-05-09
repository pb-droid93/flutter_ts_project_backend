import {Document} from "mongoose";
import { Interface } from "readline";

export interface IUserInterface extends Interface{
    uid: string,
    tweets:string[],
    firstName:string,
    lastName:string,
    email:string,
    createdAt: string

}