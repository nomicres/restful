module.exports = (app, propsMiddleware, middleware) => {
  propsMiddleware.expressJson !== false && app.use(middleware.expressJson())
  propsMiddleware.cors === true && app.use(middleware.cors())
}
