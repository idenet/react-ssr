import Home from '../share/pages/Home'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import routes from '../share/routes'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import serialize from 'serialize-javascript'

export default (req, store) => {
  let content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>{renderRoutes(routes)}</StaticRouter>
    </Provider>
  )
  const initalState = serialize(store.getState())
  return `
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
        <script>window.INITIAL_STATE = ${initalState}</script>
        <srcipt src="bundle.js"></srcipt>
      </body>
      </html>
    `
}
