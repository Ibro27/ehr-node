import { Appointment } from "../../model/appointment.js";

export const DeleteAppointment = async (req, res) => {
  try {
    const deletedAppointment = await Appointment.deleteOne({
      _id: req.params.appoiontmentId,
      companyId: req.params.companyId,
    });
    if (deletedAppointment.deleteCount == 0) {
      throw new Error("Unable to find Appointment");
    }
    res.send(deletedAppointment);
  } catch (error) {
    console.error(`Something Went wrong ${error.message}`);
    resizeBy.status(400).send(`Something Went Wrong`);
  }
};
