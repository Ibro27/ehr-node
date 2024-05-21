import { Company } from "../../../model/company.js";
import pkg from "jsonwebtoken";
import nodemailer from "nodemailer";

const Jwt = pkg;
export const ForgotPassword = async (req, res) => {
  console.log(Jwt);
  try {
    console.log("mimimimimi");

    //check if the email exist in the database
    const { email } = req.body;
    if (!email)
      return res.status(400).json({ error: "Please enter your email" });

    const user = await Company.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found");
    }

    // Generate JWT token with user's ID and email
    const token = Jwt.sign(
      { id: user.id, email: user.email },
      "jwt_secret_key",
      { expiresIn: "1h" }
    );
    console.log(`Get Token-`, token);

    // Send password reset link via email
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "messirimiracle9@gmail.com",
        pass: "kjdt kxaa tqqo ymri",
      },
    });

    var mailOptions = {
      from: "security@AutomataEHR.com",
      to: email,
      subject: "Password Reset Link 🔐",
      text: `http://localhost:4000/company/reset-password/${user._id}/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        return res.send({ Status: "Success" });
      }
    });
    //const resetToken = email.getResetPasswordToken()
  } catch (error) {
    res.send(`Something Went Wrong ${error.message}`);
  }
};
