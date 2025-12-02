import { Model, Types } from "mongoose";

export type TEditor = {
  user: Types.ObjectId;
  name: string;
  email: string;
  avatar?: string;
  phone: string;
  canEditNews: boolean;
  canApprove: boolean;
  isDeleted: boolean;
};

export interface EditorModel extends Model<TEditor> {
  isUserExists(email: string): Promise<TEditor | null>;
}
