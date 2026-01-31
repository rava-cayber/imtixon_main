import mongoose from "mongoose"

const schema = new mongoose.Schema({
  branch: { type: mongoose.Schema.Types.ObjectId, ref:"Branch" },
  username: { type:String, unique:true },
  password: String,
  birthDate: Date,
  gender: String,
  role: {
    type: String,
    enum: ["STAFF","ADMIN","SUPERADMIN"],
    default: "STAFF"
  }
})

export default mongoose.model("Staff", schema)
