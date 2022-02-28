const express = require('express')
const app = express()

// Define the port.
const port = process.env.PORT || 8080;

const server = http.createServer((req,res) => {
  // normalize url by removing querystring, optional trailing slash, and
  // making lowercase
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
  switch(path) {
    case '':
      serveStaticFile(res, '/public/index.html', 'text/html')
      break
    case '/about':
      serveStaticFile(res, '/public/about.html', 'text/html')
      break
    case '/img/logo.png':
      serveStaticFile(res, '/public/img/logo.png', 'image/png')
      break
    default:
      serveStaticFile(res, '/public/404.html', 'text/html', 404)
      break
  }
})

// Define directory where static files will be served to run in the browser.
app.use(express.static(__dirname + '/public'))

app.get('/hello/', (req, res) => {
	res.send('Hello World! - JU')
})

app.get('/mongo/', (req, res) => {
	res.send('MongoDB! - JU')
    // Test Mongo DB





})

const logMessage = 'Application listening at http://localhost:' + port
app.listen(port, () => {
	console.log(logMessage)
	console.log('...press  Ctrl-C to terminate.\n')
})
