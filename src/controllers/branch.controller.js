import Branch from "../models/Branch.model.js"

export const add = async (req,res)=> {
  res.json(await Branch.create(req.body))
}

export const all = async (req,res)=>{
  res.json(await Branch.find())
}
