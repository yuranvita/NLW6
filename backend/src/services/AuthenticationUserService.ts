
import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../repositories/UserRepositories';

import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken';



interface IAuthenticationRequest{
  email : string;
  password : string;
}


class  AuthenticationUserService{
  async execute({email , password} : IAuthenticationRequest){

    const userRepositories = getCustomRepository(UserRepositories);

    const user = await userRepositories.findOne({
      email
    });

    if(!user){
      throw new Error("Email or Password incorrect!");
    }


    const passwordMatch = await compare(password , user.password);

    if(!passwordMatch){
      throw new Error("Email or Password incorrect!");
    }

    const token = sign(
      {
        email : user.email,
      },
      "b7ece7a63dc0ef2989a2637c2809f559",
      {
        subject : user.id,
        expiresIn : "1d"
      }
    );

    return token;

  }
}

export { AuthenticationUserService }