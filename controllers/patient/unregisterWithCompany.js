import {Patient } from '../../model/patient.js'
import { Company } from "../../model/company.js";



export const UnregisterWithCompany = async (req, res) => {
    try {
        const patientId = req.params.patientId;
        const companyId = req.params.companyId;

        // Check if both patient and hospital exist
        const patient = await Patient.findById(patientId);
        const company = await Company.findById(companyId);

        if (!patient || !company) {
            return res.status(404).json({ message: 'Patient or hospital not found' });
        }

        // Check if patient is registered to the hospital
        if (!patient.company.includes(companyId)) {
            return res.status(400).json({ message: 'Patient is not registered to this hospital' });
        }

        // Remove hospital from patient's hospitals array
        patient.company = patient.company.filter(id => id !== companyId);
        await patient.save();

        res.json({ message: 'Patient unregistered from hospital successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
