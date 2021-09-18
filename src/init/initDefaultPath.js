module.exports = (app, routes, props, method) => {
  const httpMethod = method === 'getById' ? 'get' : method
  const path = ['getById', 'put', 'patch', 'delete'].includes(method) ? '/:id' : '/'
  typeof props[method] === 'function' && app[httpMethod](path, routes[method](props[method]))
}
