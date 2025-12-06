import { Types } from "mongoose";

export type TNewsCreateInput = {
  user: Types.ObjectId;
  title_bn: string;
  subtitle_bn?: string;
  summary_bn?: string;
  content_bn: string;
  category: string;
  subcategory?: string;
  tags_bn?: string[];
  division?: string;
  district?: string;
  upazila?: string;
  isBreaking?: boolean;
  isFeatured?: boolean;
  isExclusive?: boolean;
  scheduledAt?: Date;
};
