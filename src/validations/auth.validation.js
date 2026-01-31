
import Joi from "joi"

export const registerSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(6).required(),
  repeat_password: Joi.ref("password"),
  branch: Joi.string().required(),
  birthDate: Joi.date().required(),
  gender: Joi.string().valid("male","female").required(),
  role: Joi.string().valid("STAFF","ADMIN","SUPERADMIN")
})

export const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
})
