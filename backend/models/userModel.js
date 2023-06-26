import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

//ADDING A HASH TO ENCRYPT THE PASSWORD DURING REGISTERING USER
userSchema.pre("save", async function (next) {

  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//MATCHING THE PASSWORDS DURING LOGIN AND AUTHENTICATION
userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model("User", userSchema);

export default User;
