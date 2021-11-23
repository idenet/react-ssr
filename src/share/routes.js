import List from '../share/pages/List'
import Home from '../share/pages/Home'

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/list',
    ...List,
  },
]
