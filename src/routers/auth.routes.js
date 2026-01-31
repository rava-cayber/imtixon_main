import { Router } from "express"
import { register, login } from "../controllers/auth.controller.js"
import validate from "../middlewares/validate.js"
import { registerSchema, loginSchema } from "../validations/index.js"

const r = Router()

r.post("/register", validate(registerSchema), register)
r.post("/login", validate(loginSchema), login)

export default r
