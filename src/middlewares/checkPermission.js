import RolePermission from "../models/RolePermission.model.js"

export default (model, action) => async (req,res,next)=>{
  if(req.user.role === "SUPERADMIN") return next()

  const data = await RolePermission
    .findOne({ staff:req.user.id })
    .populate("permission")

  const allowed =
    data &&
    data.permission.model === model &&
    data.permission.actions.includes(action)

  if(!allowed) {
    return res.status(403).json({ message:"Permission denied" })
  }

  next()
}
