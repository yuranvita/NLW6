import {Router} from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagsController } from './controllers/CreateTagsController'

import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { AuthenticationUserController } from './controllers/AuthenticationUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiverComplimentsController';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUserController } from './controllers/ListUsersController';


const router = Router();

const createUserController = new CreateUserController();
const createTagsController = new CreateTagsController();
const authenticationController = new AuthenticationUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();
const listUserController = new ListUserController();

router.post("/users", createUserController.handle);
router.post("/tags" , ensureAuthenticated,ensureAdmin, createTagsController.handle);
router.post("/sessions", authenticationController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);


router.get("/user/compliments/send" , ensureAuthenticated,listUserSendComplimentsController.handle );
router.get("/user/compliments/receive" , ensureAuthenticated,listUserReceiveComplimentsController.handle );
router.get("/tags", ensureAuthenticated , listTagsController.handle);
router.get("/users", ensureAuthenticated , listUserController.handle)


export {router};