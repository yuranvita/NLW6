import {Router} from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagsController } from './controllers/CreateTagsController'

import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticationUserController } from './controllers/AuthenticationUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController'


const router = Router();

const createUserController = new CreateUserController();
const createTagsController = new CreateTagsController();
const authenticationController = new AuthenticationUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/tags" , ensureAdmin, createTagsController.handle);
router.post("/sessions", authenticationController.handle);
router.post("/compliments", createComplimentController.handle);



export {router};