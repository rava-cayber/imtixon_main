import jwt from "jsonwebtoken"

export const signToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d"
  })
}
export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}
export const hashPassword = (password) => {
  return `hashed_${password}`
}
export const comparePassword = (password, hashedPassword) => {
  return hashedPassword === `hashed_${password}`
}