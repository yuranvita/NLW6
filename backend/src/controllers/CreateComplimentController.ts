import { CreateComplimentService } from "../services/CreateComplimentService";
import {request, Request ,Response} from 'express';

class CreateComplimentController{
  async handle(req : Request ,res : Response){

    const {tag_id , user_receiver , message} = req.body;
    const {user_id} = request;

    const createComplimentService = new  CreateComplimentService();

    const compliment = await createComplimentService.execute({
      tag_id,
      user_sender : user_id,
      user_receiver,
      message
    });

    return res.json(compliment);



  }
}

export { CreateComplimentController }