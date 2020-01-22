import config from '../config';

export default Object.freeze({
  RABBITURL: config.rabbitmqURL,
  EXCHANGE: 'resources',
  TYPE: 'topic',
  CREATED_CLIENT: {
    QUEUE: 'company_created_consumer',
    ROUTEKEY: 'company.created',
  },
  BECAME_CLIENT: {
    QUEUE: 'company_became_client_consumer',
    ROUTEKEY: 'company.updated.became_client',
  },
});
