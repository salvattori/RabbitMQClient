import mongoose from 'mongoose';

import config from '../config';

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    mongoose.Promise = Promise;
    mongoose.connect(config.mongoURL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
  }
}

export default new DataBase();
