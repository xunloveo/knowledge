// import Vue from 'vue'
// import Hello from './components/hello'

// export default ({ Vue, options, router }) => {
//   Vue.compoent('hello', Hello)
//   // Register()
// }

// function Register(app) {
//   const files = require.context('./components', true, /.vue$/)
//   console.log('fi', files)
//   files.keys().forEach(key => {
//     let fileUrl = './components' + key.substring(1)
//     import(fileUrl + '').then(res => {
//       let { default: component } = res

//       console.log('nn', component)
//       app.component(component.name, component)
//     })
//   })
// }

import { defineClientAppEnhance } from '@vuepress/client'
import Home from './components/Home'

export default defineClientAppEnhance(({app, router, siteData}) => {
  app.component('Home', Home)
  // Register(app)
})
