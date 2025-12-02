import { Model, Types } from "mongoose";

export type TAdmin = {
  user: Types.ObjectId;
  name: string;
  email: string;
  avatar?: string;
  phone: string;
  canEditNews: boolean;
  canApprove: boolean;
  isDeleted: boolean;
};

export interface AdminModel extends Model<TAdmin> {
  isUserExists(email: string): Promise<TAdmin | null>;
}
