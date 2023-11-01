import { Schema, model } from "mongoose";
import { INewsLetter } from "./newsLetter.interface";

const newsLetterSchema = new Schema<INewsLetter>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

export const NewsLetter = model<INewsLetter>("newsLetter", newsLetterSchema);
