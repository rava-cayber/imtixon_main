import Joi from "joi"

export const branchSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  time: Joi.string().required()
})

export default {
  branchSchema
}