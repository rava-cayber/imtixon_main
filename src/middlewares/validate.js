import CustomError from "../utils/CustomError.js"

export default (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body)

  if (error) {
    return next(
      new CustomError(error.details[0].message, 422)
    )
  }

  next()
}
