/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

const http = require('http')
const fs = require('fs')
const path = require('path')

const hostname = 'localhost'
const port = 3000

const htmlWrapperPrefix =
  '<!DOCTYPE html>' +
  '<html lang="en">' +
  '<head>' +
  '  <meta charset="UTF-8" />' +
  '  <title>Heading</title>' +
  '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
  '  <link href="/output.css" rel="stylesheet" />' +
  '</head>' +
  '<body>'

const htmlWrapperPostfix = '</body></html>'

const server = http.createServer(async (req, res) => {
  console.log('Request for ' + req.url + ' by method ' + req.method)

  if (req.method === 'GET') {
    var fileUrl
    if (req.url === '/') fileUrl = '/index.html'
    else fileUrl = req.url

    var filePath = path.resolve('./html' + fileUrl)
    const fileExt = path.extname(filePath)
    if (fileExt === '.html') {
      fs.exists(filePath, async (exists) => {
        if (!exists) {
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html')
          await fs.readFile(
            path.resolve('./html/404.html'),
            'utf-8',
            function (err, data) {
              res.write(`${htmlWrapperPrefix}${data}${htmlWrapperPostfix}`)
              res.end()
            }
          )
          return
        }
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        await fs.readFile(filePath, 'utf-8', function (err, data) {
          res.write(`${htmlWrapperPrefix}${data}${htmlWrapperPostfix}`)
          res.end()
        })
      })
    } else if (fileExt === '.css') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/css')
      fs.createReadStream(filePath).pipe(res)
    } else {
      res.statusCode = 404
      res.setHeader('Content-Type', 'text/html')
      await fs.readFile(
        path.resolve('./html/404.html'),
        'utf-8',
        function (err, data) {
          res.write(`${htmlWrapperPrefix}${data}${htmlWrapperPostfix}`)
          res.end()
        }
      )
    }
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html')
    await fs.readFile(
      path.resolve('./html/404.html'),
      'utf-8',
      function (err, data) {
        res.write(`${htmlWrapperPrefix}${data}${htmlWrapperPostfix}`)
        res.end()
      }
    )
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
