import { Appointment } from "../../model/appointment.js";

export const CreateAppointment = async (req, res) => {
  try {
    const {
      companyId,
      firstName,
      lastName,
      visitDate,
      appointmentTitle,
      appointmentDescription,
      appointmentWith,
    } = req.body;

    const newAppointment = new Appointment({
      companyId,
      firstName,
      lastName,
      visitDate,
      appointmentTitle,
      appointmentWith,
      appointmentDescription,
    });
    await newAppointment.save();
    res.send(newAppointment);
  } catch (error) {
    console.error(`Something Went Wrong ${error.message}`);
    res.status(400).send(`${error.message}`);
  }
};
