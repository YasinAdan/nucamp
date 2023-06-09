// dotenv
require('dotenv').config();

// create a new server

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// Use default router
server.use(router);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('JSON Server is running on port: ', port)
});
