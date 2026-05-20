import type { Request, Response } from 'express';
import { sendResponse } from '../../utils/sendResponse.js';
import authService from '../service/user.service.js';


export const signup = async (req:Request, res:Response)=>{
  const {name, email, age, password, role} =req.body;

  const user = await authService.createUser({ name, email, password, age, role });

   if (!user) {
    return sendResponse(res, { message: "Failed to create user", error: true }, 400);
  }
   sendResponse(res, { message: "User registered successfully", data: user }, 200);

}