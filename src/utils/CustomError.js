export default class CustomError extends Error {
  constructor(message, status = 400) {
    super(message)
    this.status = status
  }
  static badRequest(message) {
    return new CustomError(message, 400)
  }
    static unauthorized(message) {
    return new CustomError(message, 401)
  }
    static forbidden(message) {
    return new CustomError(message, 403)
  }
    static notFound(message) {
    return new CustomError(message, 404)
  }
    static conflict(message) {
    return new CustomError(message, 409)
  }
    static internalServerError(message) {
    return new CustomError(message, 500)
  }
    static serviceUnavailable(message) {
    return new CustomError(message, 503)
  }
}
