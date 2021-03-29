import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入
const Home = () => import('../views/home/home');
const Category = () => import('../views/category/category');
const Cart =() => import('../views/cart/cart')
const Profile = () => import('../views/profile/profile')
const Detail = () => import('../views/detail/detail')

// 安装插件
Vue.use(VueRouter);

// router:[] 抽出来
const routes = [
  {
    path:'',
    redirect:'/home'
   },
   {
     path:'/home',
     component:Home
   },
   {
     path:'/category',
     component:Category
   },
   {
     path:'/cart',
     component:Cart
   },
   {
     path:'/profile',
     component:Profile
   },
   {
     path:'/detail/:iid',
     component:etail
   }
]


// 2.创建路由对象
const router = new VueRouter({
  routes,
  mode:"history"
})

// 3导出
export default router
