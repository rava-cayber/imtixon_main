import Transport from "../models/Transport.model.js"

export const add = async (req,res)=>{
  res.json(await Transport.create(req.body))
}

export const all = async (req,res)=>{
  res.json(await Transport.find())
}
