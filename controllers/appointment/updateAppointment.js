import { Appointment } from "../../model/appointment.js";

export const UpdateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findOne({
      _id: req.params.appointmentId,
      companyId: req.params.companyId,
    });
    if (!appointment) {
      throw new Error("Unable to find Appointment");
    }
    appointment.firstName = req.body.firstName || appointment.firstName;
    appointment.lastName = req.body.lastName || appointment.lastName;
    appointment.visitDate = req.body.visitDate || appointment.visitDate;
    appointment.appointmentTitle =
      req.body.appointmentTitle || appointment.appointmentTitle;
    appointment.appointmentDescription =
      req.body.appointmentDescription || appointment.appointmentDescription;

    await appointment.save();
    res.send(appointment);
  } catch (error) {
    console.error(`Something Went Wrong ${error.message}`);
    res.status(400).send(`Something Went Wrong ${error.message}`);
  }
};
