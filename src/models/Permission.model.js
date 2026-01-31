import mongoose from "mongoose"

const schema = new mongoose.Schema({
  model: String,
  actions: {
    type: [String],
    enum: ["create","read","update","delete"]
  }
})

export default mongoose.model("Permission", schema)
