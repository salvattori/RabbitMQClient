export default (id, type, message) =>
  new Promise((resolve, reject) => {
    try {
      const _id = id;
      const _type = type;
      const {
        'created-at': created_at,
        'updated-at': updated_at,
        'my-id': my_id,
        'is-manufacturer': is_manufacturer,
        'is-client': is_client,
        'became-manufacturer-at': became_manufacturer_at,
        'became-client-at': became_client_at,
        cnpj,
        name,
        'company-type': company_type,
        'opening-date': opening_date,
        'fantasy-name': fantasy_name,
        'legal-nature': legal_nature,
        email,
        'phone-number': phone_number,
        efr,
        'share-capital': share_capital,
        'public-place': public_place,
        number,
        complement,
        'zip-code': zip_code,
        neighborhood,
        city,
        uf,
        address,
      } = message;
      return resolve({
        _id,
        _type,
        created_at,
        updated_at,
        my_id,
        is_manufacturer,
        became_manufacturer_at,
        is_client,
        became_client_at,
        cnpj,
        name,
        company_type,
        opening_date,
        fantasy_name,
        legal_nature,
        email,
        phone_number,
        efr,
        share_capital,
        address,
        public_place,
        number,
        complement,
        zip_code,
        neighborhood,
        city,
        uf,
      });
    } catch (error) {
      return reject(error);
    }
  });
