import { Schema, model } from "mongoose";

const userTypeSchema = Schema({
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: [true, "Please Pass the Company Id"],
  },
  roleName: {
    type: String,
    required: [true, "Please Pass the Role Name"],
  },
});

const UserType = new model("UserType", userTypeSchema);
export { UserType };
