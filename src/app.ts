import express from 'express';
import authRouter from './api/routes/user.routes.js';
import globalErrorHandler from './middleware/globalErrorHandler.js';
import logger from './middleware/logger.js';

const app =express();

app.use(express.json())
app.use(logger)
app.use(globalErrorHandler)

 app.get("/", logger, (req, res)=>{
    
    res.send("hello world");
})

app.use('/auth',authRouter )

export default app;

