import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

function getUserName() {
  return 'wsasouza2';
}

const username = getUserName();

routes.get('/', (req, res) => {6.  
  return res.send(username);
})

routes.get('/users', UserController.index);
routes.get('/users/create', UserController.create);


export default routes;

