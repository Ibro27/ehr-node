import {Patient } from '../../model/patient.js'
import { Company } from "../../model/company.js";



export const RegisterWithCompany = async (req, res) => {
   
    try {
     
      const company = await Company.find(companyId);
      if (!company) {
        return res.status(404).send('Company not found');
      }
  
      const patient = new Patient({
        companyId,
        ...req.body
      });
  
c
      await patient.save();
  
      res.status(201).send('Patient registered successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  };
  
  
  