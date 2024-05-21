import { Schema, model } from "mongoose";

const staffSchema = Schema({
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: [true, "Please pass Hospital Id of staff"],
  },
  firstName: {
    type: String,
    required: [true, "Please pass First Name of staff"],
  },
  lastName: {
    type: String,
    required: [true, "Please pass Last Name of staff"],
  },
  password: {
    type: String,
    required: [true, "Please pass staff's password"],
  },
  email: {
    type: String,
    required: [true, "Please pass staff's email"],
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: "UserType",
    required: [true, "Please pass staff's role"],
  },
});

const Staff = new model("Staff", staffSchema);
export { Staff };
