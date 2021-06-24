import "reflect-metadata";
import express , { Request , Response , NextFunction}from 'express';
import "express-async-errors"
import {router} from "./routes";

import "./database";

const PORT = 3333;
const app = express();

app.use(express.json());
app.use(router);
app.use((err : Error, req : Request, res : Response , next : NextFunction)=>{
  if(err instanceof Error){
    return res.status(400).json({
      error : err.message
    })
  }

  return res.status(500).json({
    status : "error",
    message : "Internal Server Error"
  })
})


app.listen(PORT,()=> console.log('Server Running on PORT :' + " " +PORT));

