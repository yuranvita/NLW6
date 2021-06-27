import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UserRepositories } from "../repositories/UserRepositories"


class ListUserReceiverComplimentService{
  async execute(user_id : string){
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

    const compliments = await complimentsRepositories.find({
      where : {
        user_receiver : user_id
      },
      relations : ["tag"]
    });

    return compliments;
  }
}


export{ ListUserReceiverComplimentService }