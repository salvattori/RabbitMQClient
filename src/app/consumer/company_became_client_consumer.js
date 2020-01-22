import jackrabbit from 'jackrabbit';

import RabbitMQ from '../../rabbitMQ';
import ClientController from '../controller/ClientController';

async function CompanyBecameCliente() {
  console.log('hi');

  const connection = new RabbitMQ();
  const { exchange } = connection;

  exchange
    .queue({
      name: '_client_consumer',
      exclusive: false,
      key: 'company.updated.became_client',
    })
    .consume(ClientController.store);
}
export default CompanyBecameCliente;
