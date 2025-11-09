import { Schema, model, Document, Types } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email?: string;
  phone?: string;
  owner: Types.ObjectId;
}

const ContactSchema = new Schema<IContact>({
  name: { type: String, required: true },
  email: String,
  phone: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export default model<IContact>('Contact', ContactSchema);