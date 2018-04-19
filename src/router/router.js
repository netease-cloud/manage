import Main from '@/views/Main.vue'

export const appRouter = [
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: Main,
    children: [
      {
        path: 'index',
        redirect: '/index/eat',
        icon: 'ios-home-outline',
        name: 'home_index',
        title: '首页',
        component: resolve => require(['@/views/home/index.vue'],resolve),
        children: [
          {
            path: 'eat',
            name: 'eat',
            title: '堂食',
            component: resolve => require(['@/views/home/module/eat.vue'],resolve),            
          },
          {
            path: 'out-eat',
            name: 'out-eat',
            title: '外卖',
            component: resolve => require(['@/views/home/module/out-eat.vue'],resolve),            
          },
          {
            path: 'reserve',
            name: 'reserve',
            title: '预定',
            component: resolve => require(['@/views/home/module/reserve.vue'],resolve),            
          }
        ]
      }
    ]
  },
  {
    path: '/business',
    name: 'business',
    component: Main,
    children: [
      {
        path: 'index',
        icon: 'ios-browsers-outline',
        name: 'business_index',
        title: '营业概要',
        component: resolve => require(['@/views/business/index.vue'],resolve)
      }
    ]
  },
  {
    path: '/order-manage',
    name: 'order-manage',
    component: Main,
    children: [
      {
        path: 'index',
        icon: 'clipboard',
        name: 'order-manage_index',
        title: '订单管理',
        component: resolve => require(['@/views/order-manage/index.vue'],resolve)
      }
    ]
  },
  {
    path: '/promotion',
    name: 'promotion',
    component: Main,
    children: [
      {
        path: 'index',
        icon: 'ios-pricetag-outline',
        name: 'promotion_index',
        title: '促销活动',
        component: resolve => require(['@/views/promotion/index.vue'],resolve)
      }
    ]
  },
  {
    path: '/shifts',
    name: 'shifts',
    component: Main,
    children: [
      {
        path: 'index',
        icon: 'ios-home-outline',
        name: 'shifts_index',
        title: '交接班',
        component: resolve => require(['@/views/shifts/index.vue'],resolve)
      }
    ]
  },
  {
    path: '/finance',
    name: 'finance',
    component: Main,
    children: [
      {
        path: 'index',
        icon: 'ios-home-outline',
        name: 'finance_index',
        title: '财务报表',
        component: resolve => require(['@/views/finance/index.vue'],resolve)
      }
    ]
  },
  {
    path: '/menber',
    name: 'menber',
    component: Main,
    children: [
      {
        path: 'index',
        icon: 'ios-home-outline',
        name: 'menber_index',
        title: '会员管理',
        component: resolve => require(['@/views/menber/index.vue'],resolve)
      }
    ]
  },
  {
    path: '/food',
    name: 'food',
    component: Main,
    children: [
      {
        path: 'index',
        icon: 'ios-home-outline',
        name: 'food_index',
        title: '菜品管理',
        component: resolve => require(['@/views/food/index.vue'],resolve)
      }
    ]
  },
  {
    path: '/goods',
    name: 'goods',
    component: Main,
    children: [
      {
        path: 'index',
        icon: 'ios-home-outline',
        name: 'goods_index',
        title: '商品采购',
        component: resolve => require(['@/views/goods/index.vue'],resolve)
      }
    ]
  },
  {
    path: '/stock',
    name: 'stock',
    component: Main,
    children: [
      {
        path: 'index',
        icon: 'ios-home-outline',
        name: 'stock_index',
        title: '库存管理',
        component: resolve => require(['@/views/stock/index.vue'],resolve)
      }
    ]
  },
  {
    path: '/table-manage',
    name: 'table-manage',
    component: Main,
    children: [
      {
        path: 'index',
        icon: 'ios-home-outline',
        name: 'table-manage_index',
        title: '餐桌管理',
        component: resolve => require(['@/views/table-manage/index.vue'],resolve)
      }
    ]
  },
  {
    path: '/certificates',
    name: 'certificates',
    component: Main,
    children: [
      {
        path: 'index',
        icon: 'ios-home-outline',
        name: 'certificates_index',
        title: '证件上传',
        component: resolve => require(['@/views/certificates/index.vue'],resolve)
      }
    ]
  },
  {
    path: '/set',
    name: 'set',
    component: Main,
    children: [
      {
        path: 'index',
        icon: 'ios-home-outline',
        name: 'set_index',
        title: '设置',
        component: resolve => require(['@/views/set/index.vue'],resolve)
      }
    ]
  }
]
export const routers = [
  ...appRouter
]