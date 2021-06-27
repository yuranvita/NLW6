import { Request , Response } from "express";
import { ListTagService } from "../services/ListTagService";


class ListTagsController{
  async handle(req : Request , res : Response){
    const listTagService = new ListTagService();

    const tags = await listTagService.execute();

    return res.json(tags);
  }
}


export { ListTagsController }