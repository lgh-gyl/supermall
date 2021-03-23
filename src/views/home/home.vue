<template>
    <div id="home">
        <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
        <home-swiper :banners="banners"/>
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-control class="tab-control" :titles="['流行','新款','精选']" @click="tabclick"/>
        <goods-list :goods="showGoods"/>
        <ul>1</ul>
        <ul>1</ul>
        <ul>1</ul>
        <ul>1</ul>
        <ul>2</ul>
        <ul>2</ul>
        <ul>2</ul>
        <ul>2</ul>
        <ul>2</ul>
        <ul>2</ul>
        <ul>3</ul>
        <ul>3</ul>
        <ul>3</ul>
        <ul>3</ul>
        <ul>3</ul>
        <ul>3</ul>
        <ul>3</ul>
        <ul>3</ul>
        <ul>3</ul>
        <ul>3</ul>
        <ul>3</ul>
        <ul>3</ul>
        <ul>3</ul>
        <ul>3</ul>
        <ul>3</ul>
        <ul>3</ul>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from   'components/content/goods/GoodsList'

  import HomeSwiper from './childCopmps/HomeSwiper'
  import RecommendView from './childCopmps/RecommendView'
  import FeatureView from 'views/home/childCopmps/FeatureView'

  import {getHomeMultidata,getHomeGoods} from 'network/home'


    

export default {
     name:"Home",  
     components: {
         NavBar,
         HomeSwiper,
         RecommendView,
         FeatureView,
         TabControl,
         GoodsList

     },

     data() {
         return {
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0,list:[1]},
                'news':{page:0,list:[1]},
                'sell':{page:0,list:[1]},
            },
            currentType: "pop"
         }
     },
      computed:{
          showGoods(){
            return this.goods[this.currentType].list
          }
      },
     created() {
        //  请求多个数据
        this.getHomeMultidata()
        //  请求商品数据
        this.getHomeGoods('pop')

        this.getHomeGoods('news')

        this.getHomeGoods('sell')
     },
     methods:{
        //  事件监听相关方法
        tabclick(index){
            switch(index){
                 case 0:
                    this.currentType ='pop'
                break
                 case 1:
                     this.currentType ='news'
                break
                 case 2:
                     this.currentType ='sell'
                break
            }
        },

        //  网路请求相关方法
         getHomeMultidata(){
              getHomeMultidata().then(res => {
            //   console.log(res)
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;   
         })
         },
         getHomeGoods(type){
             const page = this.goods[type].page + 1
            getHomeGoods(type,page).then(res => {
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page += 1
            })
         }
        }
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

   .tab-control{
       position: sticky;
       top: 44px; 
       z-index: 9px;


   }

</style>