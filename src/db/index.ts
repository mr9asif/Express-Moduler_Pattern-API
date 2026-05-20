import { neon } from "@neondatabase/serverless";
import { config } from "../config/config.js";

export const sql = neon(config.database_url);

export const initDB= async() =>{
    console.log("databse connected")
}