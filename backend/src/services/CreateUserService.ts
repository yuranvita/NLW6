import { UserRepositories } from "../repositories/UserRepositories";
import {getCustomRepository} from  'typeorm';


interface IUSerRequest{
  name : string,
  email : string;
  admin? : boolean
}


class CreateUserService {

  async execute({name , email , admin} : IUSerRequest){
    const userRepositories = getCustomRepository(UserRepositories);


    if(!email){
      throw new Error("Email incorrect")
    }

    const userAlreadyExists = await userRepositories.findOne({
      email
    });

    if(userAlreadyExists){
      throw new Error("User already exists!");
    }
    

    const user = userRepositories.create({
      name,
      email,
      admin
    });


    await userRepositories.save(user);

    return user;
  }

}


export { CreateUserService }