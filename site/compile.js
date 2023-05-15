/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

const fs = require('fs')
const YAML = require('yaml')
const minify = require('html-minifier').minify

const htmlHead =
  '<head>' +
  '  <meta charset="UTF-8" />' +
  '  <title>DEBUG</title>' +
  '  <meta name="viewport" content="width=device-width, initial-scale=1" />' +
  '  <link rel="preconnect" href="https://fonts.googleapis.com" /> \n' +
  '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> \n' +
  '  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />\n' +
  '  <link href="https://cdn.mytiki.com/fonts/koara.css" rel="stylesheet" />' +
  '  <link href="/tiki-style.css" rel="stylesheet" />' +
  '</head>'

const debugDir = 'public'
const prodDir = 'dist'

const combine = (files, clazz, id, out) => {
  let body = ''
  files.forEach((file) => {
    const data = fs.readFileSync(file, 'utf-8')
    body += data
  })
  save(
    `<div ${id === undefined ? '' : `id="${id}"`} ${
      clazz === undefined ? '' : `class="${clazz}"`
    }>${body}</div>`,
    out
  )
}

const save = (body, out) => {
  const html = `<!DOCTYPE html><html lang="en">${htmlHead}<body>${body}</body></html>`
  fs.writeFileSync(
    `${debugDir}/${out}`,
    minify(html, {
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyElements: true,
      removeEmptyAttributes: true,
    })
  )
  fs.writeFileSync(
    `${prodDir}/${out}`,
    minify(body, {
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyElements: true,
      removeEmptyAttributes: true,
    })
  )
}

if (!fs.existsSync(`${debugDir}`)) fs.mkdirSync(`${debugDir}`)
if (!fs.existsSync(`${debugDir}/widgets`)) fs.mkdirSync(`${debugDir}/widgets`)
if (!fs.existsSync(`${debugDir}/assets`)) fs.mkdirSync(`${debugDir}/assets`)

if (!fs.existsSync(`${prodDir}`)) fs.mkdirSync('dist')
if (!fs.existsSync(`${prodDir}/widgets`)) fs.mkdirSync(`${prodDir}/widgets`)
if (!fs.existsSync(`${prodDir}/assets`)) fs.mkdirSync(`${prodDir}/assets`)

fs.cpSync('assets', `${debugDir}/assets`, { recursive: true })
fs.cpSync('assets', `${prodDir}/assets`, { recursive: true })

const pages = 'html/pages'
const widgets = 'html/widgets'

const main = async () => {
  let files = fs.readdirSync(pages)
  files.forEach((file) => {
    const exists = fs.existsSync(`${pages}/${file}/config.yml`)
    if (exists) {
      const data = fs.readFileSync(`${pages}/${file}/config.yml`, 'utf-8')
      const config = YAML.parse(data)
      combine(
        config.files.map((filename) => `${pages}/${file}/${filename}`),
        config.class,
        config.id,
        `${file}.html`
      )
    }
  })

  files = fs.readdirSync(widgets)
  files.forEach((file) => {
    const data = fs.readFileSync(`${widgets}/${file}`, 'utf-8')
    save(
      data.replace(
        '<!--\n' +
          '  ~ Copyright (c) TIKI Inc.\n' +
          '  ~ MIT license. See LICENSE file in root directory.\n' +
          '  -->',
        ''
      ),
      `widgets/${file}`
    )
  })
}
main()
