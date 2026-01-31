import mongoose from "mongoose"

const schema = new mongoose.Schema({
  staff: { type: mongoose.Schema.Types.ObjectId, ref:"Staff" },
  permission: { type: mongoose.Schema.Types.ObjectId, ref:"Permission" }
})

export default mongoose.model("RolePermission", schema)
