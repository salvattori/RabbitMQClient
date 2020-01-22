import Client from '../models/Client';
import buildClient from '../../util/ClientBuild';
import OmieClient from '../lib/omieClient';

class ClientController {
  async store(message, ack) {
    try {
      const { data } = message;
      const clientDeserialized = await buildClient(
        data.id,
        data.type,
        data.attributes
      );

      await Client.updateOne(clientDeserialized);
      const client = new OmieClient(clientDeserialized.my_id);
      client.addTag('cliente');
      console.log(client);
    } catch (error) {
      // console.log('Error:: ', error);
    }
  }
}
export default new ClientController();
