import {request, Request , Response} from 'express';
import { ListUserReceiverComplimentService } from '../services/ListUserReceiverComplimentService';

class ListUserReceiveComplimentsController{
  async handle(req : Request , res : Response){

    const { user_id } = request;
    const listUserReceiveComplimentsService = new ListUserReceiverComplimentService();

    const compliments = await listUserReceiveComplimentsService.execute(user_id);

    return res.json(compliments);

  }
}

export { ListUserReceiveComplimentsController }