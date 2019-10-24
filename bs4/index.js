/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:02:05
 * @LastEditTime: 2019-10-23 11:56:54
 * @LastEditors: Please set LastEditors
 */

import Alert from './components/alert/index'
import Badge from './components/badge/index'
import Breadcrumb from './components/breadcrumb/index'
import Button from './components/button/index'
import ButtonGroup from './components/button-group/index'
import Card from './components/card/index'

const components = [
  Alert,
  Badge,
  Breadcrumb,
  Button,
  ButtonGroup,
  Card
]

const install = function (Vue) {
  // opts = {}
  // console.log(opts)
  // locale.use(opts.locale)
  // locale.i18n(opts.i18n)

  components.forEach(component => {
    Vue.component(component.name, component)
  })

  // Vue.use(InfiniteScroll)
  // Vue.use(Loading.directive)

  // Vue.prototype.$loading = Loading.service
  // Vue.prototype.$msgbox = MessageBox
  // Vue.prototype.$alert = MessageBox.alert
  // Vue.prototype.$confirm = MessageBox.confirm
  // Vue.prototype.$prompt = MessageBox.prompt
  // Vue.prototype.$notify = Notification
  // Vue.prototype.$message = Message
}

// 全部注册
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Alert,
  Badge,
  Breadcrumb,
  Button,
  ButtonGroup,
  Card
}
