export default function(req, res, next) {
  // req is the Node.js http request object

  // Don't forget to call next at the end if your middleware is not an endpoint!
  next()
}
