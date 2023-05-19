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
  '  <meta property="og:title" content="TIKI | Zero-party data monetization">' +
  '  <meta property="og:type" content="website">' +
  '  <meta property="og:image" content="https://cdn.mytiki.com/assets/og-img-3e6a58b7-e68d-4a90-af8a-2cc607a5ec52.png">' +
  '  <meta property="og:url" content="https://mytiki.com">' +
  '  <meta property="og:description" content="Create reward programs people ♡ to get the data you want.">' +
  '  <meta property="og:site_name" content="TIKI | Zero-party Data">' +
  '  <meta name="twitter:card" content="summary_large_image">' +
  '  <meta name="twitter:image:alt" content="Zero-party data monetization">' +
  '  <meta name="twitter:site" content="@my_tiki">' +
  '  <meta name="twitter:title" content="TIKI | Zero-party data monetization">' +
  '  <meta property="twitter:description" content="Create reward programs people ♡ to get the data you want.">' +
  '  <meta name="twitter:image" content="https://cdn.mytiki.com/assets/og-img-3e6a58b7-e68d-4a90-af8a-2cc607a5ec52.png">' +
  '  <meta name="viewport" content="width=device-width, initial-scale=1" />' +
  '  <link rel="preconnect" href="https://fonts.googleapis.com" /> ' +
  '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> ' +
  '  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />' +
  '  <link href="https://cdn.mytiki.com/fonts/koara.css" rel="stylesheet" />' +
  '  <link href="/tiki-style.css" rel="stylesheet" />' +
  '  <script defer data-domain="mytiki.com" src="https://plausible.io/js/script.tagged-events.js"></script>' +
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
    })
  )
  fs.writeFileSync(
    `${prodDir}/${out}`,
    minify(body, {
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
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
