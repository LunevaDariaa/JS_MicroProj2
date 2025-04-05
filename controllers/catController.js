import Cat from "../models/catModel.js";

//   POST /api/cats
export const createCat = async (req, res) => {
  try {
    const { name, age, breed, description, isAdopted } = req.body;
    const cat = await Cat.create({ name, age, breed, description, isAdopted });
    res.status(201).json(cat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all cats
export const getAllCats = async (req, res) => {
  try {
    const cats = await Cat.find();
    res.status(200).json(cats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single cat by ID
export const getCatById = async (req, res) => {
  try {
    const cat = await Cat.findById(req.params.id);
    if (!cat) return res.status(404).json({ message: "Cat not found" });
    res.status(200).json(cat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a cat
export const updateCat = async (req, res) => {
  try {
    const cat = await Cat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!cat) return res.status(404).json({ message: "Cat not found" });
    res.status(200).json(cat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a cat
export const deleteCat = async (req, res) => {
  try {
    const cat = await Cat.findByIdAndDelete(req.params.id);
    if (!cat) return res.status(404).json({ message: "Cat not found" });
    res.status(200).json({ message: "Cat deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
