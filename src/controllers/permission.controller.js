import Permission from "../models/Permission.model.js"
import RolePermission from "../models/RolePermission.model.js"
import CustomError from "../utils/CustomError.js"

export const addPermission = async (req,res)=>{
  res.json(await Permission.create(req.body))
}

export const assignPermission = async (req,res)=>{
  const { staff, permission } = req.body

  const exists = await RolePermission.findOne({ staff, permission })
  if (exists) throw new CustomError("Already assigned",409)

  res.json(await RolePermission.create({ staff, permission }))
}

export const ownPermissions = async (req,res)=>{
  res.json(
    await RolePermission
      .find({ staff:req.user.id })
      .populate("permission")
  )
}
