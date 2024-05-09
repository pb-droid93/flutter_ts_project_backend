import { Document } from "mongodb";
import { Interface } from "readline";

export interface ITweetInterface extends Interface{

    tweedId:string,
    content:string,
    createdAt:string,
    adminId:string
}