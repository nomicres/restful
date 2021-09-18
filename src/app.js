const init = require('./init')

module.exports = (app, { middleware, routes }) => (props) => {
  init.initMiddleware(app, props.middleware || {}, middleware)

  const methods = ['post', 'get', 'getById', 'put', 'patch', 'delete']
  methods.forEach(method => init.initCustomPath(app, routes, props.customPath || {}, method))
  methods.forEach(method => init.initDefaultPath(app, routes, props, method))

  return (port, message) => {
    app.listen(port, function () {
      console.log(message, this.address().port)
    })
  }
}
