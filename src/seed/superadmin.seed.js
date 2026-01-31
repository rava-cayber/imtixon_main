
import "../config/db.js"
import dotenv from "dotenv"
dotenv.config()

import Staff from "../models/Staff.model.js"
import { bcryptHash } from "../utils/hash.js"

const seed = async () => {
  const exists = await Staff.findOne({ role:"SUPERADMIN" })
  if (exists) {
    console.log("SuperAdmin already exists")
    process.exit()
  }

  const admin = await Staff.create({
    username: "superadmin",
    password: await bcryptHash("super123"),
    role: "SUPERADMIN",
    gender: "male",
    birthDate: new Date()
  })

  console.log("SuperAdmin created:", admin.username)
  process.exit()
}

seed()
