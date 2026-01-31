import Joi from "joi"

export const permissionSchema = Joi.object({
  model: Joi.string().required(),
  actions: Joi.array()
    .items(Joi.string().valid("create","read","update","delete"))
    .min(1)
    .required()
})  
export default {
  permissionSchema
}