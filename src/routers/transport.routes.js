import { Router } from "express"
import * as c from "../controllers/transport.controller.js"
import validate from "../middlewares/validate.js"
import { transportSchema } from "../validations/index.js"
import checkToken from "../middlewares/checkToken.js"
import checkPermission from "../middlewares/checkPermission.js"

const r = Router()

r.post(
  "/",
  checkToken,
  checkPermission("Transport","create"),
  validate(transportSchema),
  c.add
)

r.get(
  "/",
  checkToken,
  checkPermission("Transport","read"),
  c.all
)

export default r
