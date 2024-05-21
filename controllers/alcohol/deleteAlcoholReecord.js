import { Alcohol } from "../../model/alcohol.js";

export const DeleteAlcohol = async (req, res) => {
  try {
    const deletedAlcohol = await Alcohol.deleteOne({
      _id: req.params.alcoholId,
    });
    if (deletedAlcohol.deleteCount == 0) {
      throw new Error("Alcohol Details with this patient id was not found");
    }
    res.send(deletedAlcohol);
  } catch (err) {
    console.error("Something went wrong 🔴", err.message);
    res.status(400).send(err.message);
  }
};
