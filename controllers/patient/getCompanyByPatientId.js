import { Patient } from "../../model/patient.js"


export const GetCompanyByPatientId = async (req, res) => {
    
    try {
        const patientId = req.params.patientId;
        const patient = await Patient.findById(patientId).populate('hospitals');
    
        if (!patient) {
          return res.status(404).json({ message: 'Patient not found' });
        }
    
        const hospitals = patient.hospitals;
        res.json({ hospitals });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    }