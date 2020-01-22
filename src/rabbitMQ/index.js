import jackrabbit from 'jackrabbit';
import rabbitmq from '../util/rabbitmqEnum';

class RabbitMQ {
  constructor() {
    this.rabbit = jackrabbit(rabbitmq.RABBITURL);
    this.exchange = this.rabbit.topic('resources');
  }
}

export default RabbitMQ;
