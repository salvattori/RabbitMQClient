require('dotenv').config();

export default {
  secret: process.env.JWT_SECRET,
  mongoURL: process.env.MONGO_DB_CONNECTION,
  expiration: 1800,
  rabbitmqURL: process.env.CLOUDAMQP_URL,
  omieURL: process.env.OMIE_URL,
  app_key: process.env.OMIE_ACCESS_KEY,
  app_secret: process.env.OMIE_SECRET_KEY,
};
