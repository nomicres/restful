module.exports = (app, routes, customPath, method) => {
  const httpMethod = method === 'getById' ? 'get' : method
  if (Array.isArray(customPath[method]) && customPath[method].length) {
    for (const [path, func] of customPath[method]) {
      app[httpMethod](path, routes[method](func))
    }
  }
}
