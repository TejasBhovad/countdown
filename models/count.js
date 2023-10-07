import { Schema, model, models } from "mongoose";

let Count;

try {
  // Check if the model already exists
  Count = model("Count");
} catch (error) {
  // If it doesn't exist, define the model
  Count = model(
    "Count",
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
      brand_id: {
        type: String,
        required: true,
        trim: true,
      },
      desc: {
        type: String,
        required: true,
        trim: true,
      },
      time: {
        type: String,
        required: false,
        trim: true,
      },
      date: {
        type: String,
        required: false,
        trim: true,
      },
      image: {
        type: String,
        required: true,
        trim: true,
      },
      // array of categories
      categories: {
        type: String,
        required: true,
        trim: true,
      },
      // save JSON object of the count
      count: {
        type: Object,
        required: false,
        trim: true,
      },
    })
  );
}

export default Count;
