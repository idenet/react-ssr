import app from './http'
import Home from '../share/pages/Home'
import { renderToString } from 'react-dom/server'
import React from 'react'

app.get('/', (req, res) => {
  let content = renderToString(<Home />)

  res.send(
    `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      </html>
    `
  )
})