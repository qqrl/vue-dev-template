export default [{
  name: 'computed',
  path: '/computed',
  component: resolve => require(['@/views/computed/Host'], resolve),
  children: [{
    name: "host",
    path: "host",
    component: resolve => require(['@/views/computed/Host'], resolve)
  }]
}]
