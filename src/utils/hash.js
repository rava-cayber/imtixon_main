import crypto from "crypto"
import bcrypt from "bcrypt"


export const sha256 = (text) => {
  return crypto
    .createHash("sha256")
    .update(text)
    .digest("hex")
}


export const md5 = (text) => {
  return crypto
    .createHash("md5")
    .update(text)
    .digest("hex")
}


export const bcryptHash = async (text) => {
  return await bcrypt.hash(text, 10)
}

export const bcryptCompare = async (text, hash) => {
  return await bcrypt.compare(text, hash)
}
export default {
  sha256,
  md5,
  bcryptHash,
  bcryptCompare
}
