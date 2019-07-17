export default [{
  name: 'net',
  path: '/net',
  component: resolve => require(['@/views/net/Ip'], resolve),
  children: [{
    name: "ip",
    path: "ip",
    component: resolve => require(['@/views/net/Ip'], resolve)
  }]
}]