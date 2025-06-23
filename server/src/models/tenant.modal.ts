
import mongoose, { Document, Schema } from 'mongoose';

export interface ITenant extends Document {
  name: string;
}

const TenantSchema = new Schema<ITenant>({
    name: {type: String, required: true}
});

export const TenantModel = mongoose.model<ITenant>('Tenants', TenantSchema);