import { Schema, Document } from "mongoose";

export interface File {
  fileId: string;
  userId: string;
  timestamp: Date;
  status: string;
  duration: number;
  size: number;
}

export type FileDocument = File & Document & { __v: number };

export const FileSchema = new Schema<File>(
  {
    fileId: { type: String, required: true },
    userId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    status: { type: String, default: "pending" },
    duration: { type: Number },
    size: { type: Number },
  },
  { versionKey: false },
);
