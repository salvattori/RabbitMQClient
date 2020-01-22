import omie from '../middlewares/apiAdapter';

class OmieClient {
  constructor(codigo_cliente_integracao, tags) {
    this.codigo_cliente_integracao = codigo_cliente_integracao;
    this.tags = tags;
    this.tag_values = [];
  }

  async addTag(value) {
    const tags = [];
    tags.push({ tag: value });
    const call = {
      call: 'AlterarCliente',
      param: [
        { codigo_cliente_integracao: this.codigo_cliente_integracao, tags },
      ],
    };
    this.tag_values.push(value);
    const response = await omie.post('/v1/geral/clientes/', call);
    return new OmieClient(response);
  }
}

export default OmieClient;
