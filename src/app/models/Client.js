import mongoose, { Schema } from 'mongoose';

const ClientSchema = new Schema({
  _id: String,
  _type: String,
  country: { type: String, default: 'Brazil' },
  created_at: String,
  updated_at: String,
  my_id: String,
  is_manufacturer: Boolean,
  became_manufacturer_at: String,
  is_client: Boolean,
  became_client_at: String,
  cnpj: String,
  name: String,
  company_type: String,
  opening_date: String,
  fantasy_name: String,
  legal_nature: String,
  email: String,
  phone_number: String,
  efr: String,
  share_capital: Number,
  address: String,
  public_place: String,
  number: Number,
  complement: String,
  zip_code: String,
  neighborhood: String,
  city: String,
  uf: String,
});

export default mongoose.model('Client', ClientSchema);
