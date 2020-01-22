import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './routes';
import './database';
import becameClient from './app/consumer/company_became_client_consumer';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.consumers();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(helmet());
    this.server.use(cors());
    this.server.use(bodyParser.urlencoded({ extended: false }));
    this.server.use(
      bodyParser.json({
        type: '*/json',
      })
    );
  }

  routes() {
    this.server.use(routes);
  }

  consumers() {
    becameClient();
  }
}

export default new App().server;
