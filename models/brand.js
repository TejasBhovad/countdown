import { Schema, model, models } from "mongoose";

let Brand;

try {
  // Check if the model already exists
  Brand = model("Brand");
} catch (error) {
  // If it doesn't exist, define the model
  Brand = model(
    "Brand",
    new Schema({
      name: {
        type: String,
        required: true,
        trim: true,
      },
      id: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      image: {
        type: String,
        required: false,
        trim: true,
      },
      countdowns: {
        type: Array,
        required: true,
      },
    })
  );
}

export default Brand;
