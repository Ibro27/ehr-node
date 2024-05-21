import { Appointment } from "../../model/appointment.js";

export const GetAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.find({
      _id: req.params.alcoholId,
      companyId: req.params.companyId,
    });
    if (!appointment) throw new Error("Alcohol Record does not exist 🔴");
    res.send(appointment);
  } catch (error) {
    console.error(`Something Went Wrong ${error.message}`);
    res.send(`Something Went Wrong ${error.message}`);
  }
};
