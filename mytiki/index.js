/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

const http = require('http')
const fs = require('fs')
const path = require('path')

const hostname = 'localhost'
const port = 3000

const server = http.createServer(async (req, res) => {
  console.log('Request for ' + req.url + ' by method ' + req.method)

  if (req.method === 'GET') {
    let fileUrl
    if (req.url === '/') fileUrl = '/index.html'
    else fileUrl = req.url

    const filePath = path.resolve('./public' + fileUrl)
    const fileExt = path.extname(filePath)
    if (fileExt === '.html') {
      const exists = fs.existsSync(filePath)
      if (!exists) {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html')
        res.write(fs.readFileSync('./public/404.html'), 'utf-8')
        res.end()
        return
      }
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.write(fs.readFileSync(filePath, 'utf-8'))
      res.end()
    } else if (fileExt === '.css') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/css')
      fs.createReadStream(filePath).pipe(res)
    } else if (fileExt === '.png') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'image/png')
      fs.createReadStream(filePath).pipe(res)
    } else if (fileExt === '.gif') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'image/gif')
      fs.createReadStream(filePath).pipe(res)
    } else if (fileExt === '.svg') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'image/svg+xml')
      fs.createReadStream(filePath).pipe(res)
    } else if (fileExt === '.jpeg') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'image/jpeg')
      fs.createReadStream(filePath).pipe(res)
    } else {
      res.statusCode = 404
      res.setHeader('Content-Type', 'text/html')
      res.write(fs.readFileSync('./public/404.html'), 'utf-8')
      res.end()
    }
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html')
    res.write(fs.readFileSync('./public/404.html'), 'utf-8')
    res.end()
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
