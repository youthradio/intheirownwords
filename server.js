const secure = require('express-force-https')
const express = require('express')
const history = require('connect-history-api-fallback')
const serveStatic = require('serve-static')
const path = require('path')

const port = process.env.PORT || 5000

const app = express()

app.use(secure)
app.use(history({
  index: '/intheirownwords/index.html'
}))
app.use('/intheirownwords/',serveStatic(path.join (__dirname, '/dist')))

app.listen(port, () => {
  console.log('server started ' + port)
})
