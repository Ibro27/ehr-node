import { Company } from "../../../model/company.js";
import pkg from "jsonwebtoken";
import bcrypt from "bcrypt";

const  Jwt  = pkg
export const ResetPassword = async (req, res) => {
    try{ 
        const { id } = req.params;
        const { newPassword, confirmPassword } = req.body;

        const token = req.header('authorization').split(" ")[1]
        //verify jwt token
        Jwt.verify(token, "jwt_secret_key", (err) => {
            console.log(req.body)
            if(err) {
                return res.status(401).send('Invalid or expired token');
            } else if (newPassword !== confirmPassword){
                throw new Error("The Password & Confirm Password Does not match");
            } else{  
                bcrypt.hash(newPassword, 10)
                .then(hash => {
                    //Update password in the database 
                    Company.findByIdAndUpdate({_id: id}, {password: hash})
                    .then(u => res.send({Status: "Password Updated"}))
                    .catch(err => res.send({Status: err}))
                })
            }
            
        })

    } catch(error) {
        res.send(`Something Went Wrong ${error.message}`)
    }
}