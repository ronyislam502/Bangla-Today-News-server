import { model, Schema } from "mongoose";
import { EditorModel, TEditor } from "./editor.interface";

const editorSchema = new Schema<TEditor, EditorModel>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User id is required"],
      unique: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      //validate email
      match: [
        /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "Please fill a valid email address",
      ],
    },
    avatar: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
    },
    canEditNews: {
      type: Boolean,
      default: true,
    },
    canApprove: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

editorSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

editorSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

editorSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

editorSchema.statics.isUserExists = async function (email: string) {
  const existingUser = await Editor.findOne({ email });

  return existingUser;
};

export const Editor = model<TEditor, EditorModel>("Editor", editorSchema);
