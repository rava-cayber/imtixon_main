import logger from "../config/logger.js"

export default (err, req, res, next) => {
  logger.error({
    message: err.message,
    status: err.status || 500,
    path: req.originalUrl
  })

  res.status(err.status || 500).json({
    message: err.message || "Server error"
  })
}
