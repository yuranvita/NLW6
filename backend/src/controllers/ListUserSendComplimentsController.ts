import {request, Request , Response} from 'express';
import { ListUserSendComplimentService } from '../services/ListUserSendComplimentService';

class ListUserSendComplimentsController{
  async handle(req : Request , res : Response){

    const { user_id } = request;
    const listUserSendComplimentsService = new ListUserSendComplimentService();

    const compliments = await listUserSendComplimentsService.execute(user_id);

    return res.json(compliments);

  }
}

export { ListUserSendComplimentsController }