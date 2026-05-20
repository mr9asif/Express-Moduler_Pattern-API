import bcrypt from 'bcrypt';
import { sql } from "../../db/index.js";
import type { RUser } from "../../types/index.js";

class AuthService{
    async createUser(user:RUser & {password:string}){
        const{name, email, age, password, role} =user;
         const passwordHash = await bcrypt.hash(password, 10);
         const result = await sql`
     INSERT INTO users (name, email, password_hash, age, role)
     VALUES (${name}, ${email}, ${passwordHash}, ${age}, COALESCE(${role}, 'user'))
     RETURNING id, name, email, age, role, created_at, updated_at
   `;

    return result[0];
    }
}

export default new AuthService();