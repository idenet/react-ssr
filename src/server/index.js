import app from './http'
import renderer from './renderer'
import createStore from './createStore'
import routes from '../share/routes'
import { matchRoutes } from 'react-router-config'

app.get('*', (req, res) => {
  const store = createStore()
  // 1.请求地址
  // 2. 获取路由配置信息
  // 3. 根据请求地址匹配出要渲染的组件的路由对象信息
  const promise = matchRoutes(routes, req.path).map(({ route }) => {
    // 如何才能知道数据舒服么时候 获取完成
    if (route.loadData) return route.loadData(store)
  })

  Promise.all(promise).then(() => {
    res.send(renderer(req, store))
  })
})
