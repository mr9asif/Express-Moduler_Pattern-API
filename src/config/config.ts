import dotenv from 'dotenv';
import { env } from 'node:process';

dotenv.config({quiet:true});

export const config={
  port : env.PORT as string,
  database_url : env.DATABASE_URL as string,
  node_env:env.NODE_ENV
}

