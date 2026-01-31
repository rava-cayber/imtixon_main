import { Router } from "express"
import * as c from "../controllers/branch.controller.js"
import validate from "../middlewares/validate.js"
import { branchSchema } from "../validations/index.js"
import checkToken from "../middlewares/checkToken.js"

const r = Router()

r.post("/", checkToken, validate(branchSchema), c.add)
r.get("/", checkToken, c.all)

export default r
