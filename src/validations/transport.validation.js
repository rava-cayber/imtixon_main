import Joi from "joi"

export const transportSchema = Joi.object({
  branch: Joi.string().required(),
  model: Joi.string().required(),
  color: Joi.string().required(),
  img: Joi.string().uri().required(),
  price: Joi.number().positive().required(),
  time: Joi.string().required()
})
