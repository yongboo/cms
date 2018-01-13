import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      meta: { title: '欢迎' }
    }]
  },

  {
    path: '/coin',
    component: Layout,
    redirect: '/coin/list',
    name: 'Coin',
    meta: { title: '货币', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'List',
        component: _import('coin/CoinList'),
        meta: { title: '货币列表', icon: 'table' }
      },
      {
        path: 'add',
        name: 'Add',
        component: _import('coin/AddCoin'),
        meta: { title: '添加货币', icon: 'form' }
      }
    ]
  },
  {
    path: '/exchange',
    component: Layout,
    redirect: '/exchange/list',
    name: 'Exchange',
    meta: { title: '交易所', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'List',
        component: _import('exchange/ExList'),
        meta: { title: '交易所列表', icon: 'table' }
      },
      {
        path: 'add',
        name: 'Add',
        component: _import('exchange/AddEx'),
        meta: { title: '添加交易所', icon: 'form' }
      },
      {
        path: 'edit/:id',
        name: 'Edit',
        hidden: true,
        component: _import('exchange/AddEx'),
        meta: { title: '编辑交易所', icon: 'form' }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/form/index',
    name: 'Exchange',
    children: [
      {
        path: 'index',
        name: 'Index_Form',
        component: _import('form/index'),
        meta: { title: 'form', icon: 'form' }
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/table/index',
    name: 'Table',
    children: [
      {
        path: 'index',
        name: 'Index_Table',
        component: _import('table/index'),
        meta: { title: 'table', icon: 'table' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

