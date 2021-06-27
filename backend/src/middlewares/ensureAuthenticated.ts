import {Request ,Response , NextFunction, request} from 'express';
import { verify } from 'jsonwebtoken';

interface IPayLoad {
  sub : string;
}

export function ensureAuthenticated(req : Request,res : Response,next : NextFunction){
  const authToken = req.headers.authorization;
  
  

  if(!authToken){
    return res.status(401).end();
  }

  const [,token] = authToken.split(" ");

 try {

  const {sub} = verify( token ,"b7ece7a63dc0ef2989a2637c2809f559") as IPayLoad;

  request.user_id = sub;

  
  return next();
 } catch (err) {

  return res.status(401).end();
 }

 
}