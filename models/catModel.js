import mongoose from "mongoose";

const catSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the cat's name"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    age: {
      type: Number,
      required: [true, "Please provide the cat's age"],
    },
    breed: {
      type: String,
      required: [true, "Please provide the cat's breed"],
    },
    description: {
      type: String,
      required: [true, "Please provide a short description"],
      minlength: [10, "Description should be at least 10 characters"],
      maxlength: [300, "Description should not exceed 300 characters"],
    },
    isAdopted: {
      type: Boolean,
      default: false,
    },
    adoptedAt: {
      type: Date,
      default: null,
      validate: {
        validator: function (value) {
          return this.isAdopted ? value !== null : value === null;
        },
        message: "Adopted date must be set only if the cat is adopted",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Cat = mongoose.model("Cat", catSchema);

export default Cat;
