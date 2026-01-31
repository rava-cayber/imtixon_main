import Staff from "../models/Staff.model.js"
import { bcryptHash, bcryptCompare } from "../utils/hash.js"
import { signAccessToken } from "../utils/jwt.js"
import CustomError from "../utils/CustomError.js"

export const register = async (req,res,next)=>{
  try{
    const exists = await Staff.findOne({ username:req.body.username })
    if(exists) throw new CustomError("Username already exists",409)

    const password = await bcryptHash(req.body.password)

    const user = await Staff.create({
      ...req.body,
      password
    })

    res.json({
      token: signAccessToken({ id:user._id, role:user.role })
    })
  }catch(e){ next(e) }
}

export const login = async (req,res,next)=>{
  try{
    const user = await Staff.findOne({ username:req.body.username })
    if(!user) throw new CustomError("User not found",404)

    const ok = await bcryptCompare(req.body.password, user.password)
    if(!ok) throw new CustomError("Wrong password",401)

    res.json({
      token: signAccessToken({ id:user._id, role:user.role })
    })
  }catch(e){ next(e) }
}
export const me = async (req,res,next)=>{
  try{
    const user = await Staff.findById(req.user.id).select("-password")
    if(!user) throw new CustomError("User not found",404)

    res.json(user)
  }catch(e){ next(e) }
}