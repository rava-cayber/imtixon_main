import jwt from "jsonwebtoken"

export default (req,res,next)=>{
  const auth = req.headers.authorization
  if(!auth) return res.status(401).json({ message:"Token yo‘q" })

  req.user = jwt.verify(auth.split(" ")[1], process.env.JWT_SECRET)
  next()
}
