<template>
     <tab-bar>
       <tab-bar-item path="/home">
         <img slot="item-icon" src="~assets/img/tabbar/home-active.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/home.svg" alt="">
         <div slot="item-text">首页</div>
       </tab-bar-item>
      
       <tab-bar-item path="/category">
          <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/catgory-active.svg" alt="">
         <div slot="item-text">分类</div>
       </tab-bar-item> 
    
       <tab-bar-item path="/cart">
           <img slot="item-icon" src="~assets/img/tabbar/profile-active.svg" alt="">
           <img slot="item-icon-active" src="~assets/img/tabbar/profile.svg" alt="">
         <div slot="item-text">购物车</div>
       </tab-bar-item>

       <tab-bar-item path="/profile">
          <img slot="item-icon" src="~assets/img/tabbar/shopcat-active.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/shopcat.svg" alt="">
         <div slot="item-text">我的</div>
       </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from '../tabbar/tabbar'
  import TabBarItem from '../tabbar/tabBarItem'

export default {
    name:"MainTabBar",
     components:{
       TabBar,
       TabBarItem
     }
}
</script>

<style scoped>

</style>

