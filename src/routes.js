import { Router } from 'express';

// import UserController from './app/controller/UserController';
// import SessionController from './app/controller/SessionController';
// import authMiddleware from './app/middlewares/auth';
// import validateSignUp from './app/validators/SessionSignUp';
// import validateSignIn from './app/validators/SessionSIgnIn';

const routes = new Router();

// routes.post('/signup', validateSignUp, SessionController.signup);
// routes.post('/signin', validateSignIn, SessionController.signin);

routes.get('/', async (req, res) => {
  res.json({ message: 'running' });
});

// routes.use(authMiddleware);
// routes.get('/users/:user_id', UserController.findById);

export default routes;
