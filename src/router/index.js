import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import jsPlumb from '@/components/jsPlumb'
import Cytoscape from '@/components/Cytoscape'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/jsplumb',
      name: 'jsplumb',
      component: jsPlumb
    },
    {
      path: '/cytoscape',
      name: 'cytoscape',
      component: Cytoscape
    }
  ]
})
