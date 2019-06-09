import HelloWorld from '~/pages/HelloWorld'

const Routers = [
  {
    name: '1',
    icon: '',
    path: '/level-1',
    component: HelloWorld,
    children: [
      {
        name: '1-1',
        icon: '',
        path: '/level-1/level-1-1',
        component: HelloWorld,
        children: [

        ]
      }
    ]
  }
]

export default Routers
