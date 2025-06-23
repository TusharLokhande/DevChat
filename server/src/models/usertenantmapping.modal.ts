
import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IUserTenantMapping extends Document {
    userId: Types.ObjectId;
    tenantId: Types.ObjectId;
    assignedAt: Date;
    isActive: boolean;
}

const UserTenantMappingSchema = new Schema<IUserTenantMapping>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    tenantId: { type: Schema.Types.ObjectId, ref: 'Tenant', required: true },
    assignedAt: { type: Date, default: () => new Date()  },
    isActive: { type: Boolean, default: true }
}, {
    timestamps: true,
    versionKey: false
});

export const UserTenantMappingModel = mongoose.model<IUserTenantMapping>('UserTenantMappings', UserTenantMappingSchema);