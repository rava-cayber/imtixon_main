import { Router } from "express"
import checkToken from "../middlewares/checkToken.js"
import checkPermission from "../middlewares/checkPermission.js"
import validate from "../middlewares/validate.js"
import { permissionSchema } from "../validations/index.js"
import * as c from "../controllers/permission.controller.js"

const r = Router()

r.post(
  "/add",
  checkToken,
  checkPermission("Permission","create"),
  validate(permissionSchema),
  c.addPermission
)

r.post(
  "/assign",
  checkToken,
  c.assignPermission
)

r.get(
  "/own",
  checkToken,
  c.ownPermissions
)

export default r
