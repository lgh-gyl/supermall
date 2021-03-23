<template>
    <div id="home">
        <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
        <home-swiper :banners="banners"/>
        <recommend-view :recommends="recommends"/>
        <feature-view></feature-view>

        <ul>11</ul>
        <ul>1</ul>
        <ul>1</ul>
        <ul>1</ul>
        <ul>2</ul>
        <ul>2</ul>
        <ul>2</ul>
        <ul>2</ul>
        <ul>2</ul>
        <ul>2</ul>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childCopmps/HomeSwiper'
  import RecommendView from './childCopmps/RecommendView'
  import FeatureView from 'views/home/childCopmps/FeatureView'

  import {getHomeMultidata} from 'network/home'

    

export default {
     name:"Home",  
     components: {
         NavBar,
         HomeSwiper,
         RecommendView,
         FeatureView
     },
     data() {
         return {
            banners:[],
            recommends:[]
         }
     },
     created() {
        //  请求多个数据
         getHomeMultidata().then(res => {
            //   console.log(res)
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
              
         })
     },
     
} 
</script>

<style scoped>
    #home {
        padding-top: 44px;
    }   
 
    .nav-bar {
    background-color: var(--color-tint);
    /* font-weight: 700; */
    color: #fff;
    
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

</style>