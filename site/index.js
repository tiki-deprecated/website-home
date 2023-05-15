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
  '  <meta name="viewport" content="width=device-width, initial-scale=1" />' +
  '  <script src="https://cdn.tailwindcss.com"></script>' +
  '  <link rel="preconnect" href="https://fonts.googleapis.com" /> \n' +
  '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> \n' +
  '  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />\n' +
  '  <link href="https://cdn.mytiki.com/fonts/koara.css" rel="stylesheet" />' +
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

    var filePath = path.resolve('./public' + fileUrl)
    const fileExt = path.extname(filePath)
    if (fileExt === '.html') {
      fs.exists(filePath, async (exists) => {
        if (!exists) {
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html')
          await fs.readFile(
            path.resolve('./public/404.html'),
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
      await fs.readFile(
        path.resolve('./public/404.html'),
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
      path.resolve('./public/404.html'),
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
