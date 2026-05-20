import app from "./app.js";
import { config } from "./config/config.js";
import { initDB } from "./db/index.js";


app.listen(config.port, ()=>{
  
    initDB();
    console.log(`server running on port ${config.port}`)
})