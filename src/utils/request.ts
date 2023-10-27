import { Request } from "express";

 export interface CustomRequest extends Request {
    user?: any; // Adjust the type of 'user' as needed
}