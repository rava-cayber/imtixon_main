import mongoose from "mongoose"

const schema = new mongoose.Schema({
  branch: { type: mongoose.Schema.Types.ObjectId, ref:"Branch" },
  model: String,
  color: String,
  img: String,
  price: Number,
  time: String
},{ timestamps:true })

export default mongoose.model("Transport", schema)
