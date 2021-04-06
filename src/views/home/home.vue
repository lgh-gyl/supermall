<template>
    <div id="home">
         <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
           <tab-control  
        :titles="['流行','新款','精选']"
         @click="tabclick"
          ref="tabControl1"
          class="tab-control" v-show="isTabFixed"/>

        <scroll class="centent"
         ref="scroll" 
          :probe-type="3"
           @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp ="loadMopre"
          >
          <!--  @pullingUp ="loadMopre" -->
        <home-swiper :banners="banners" @swiperimageload='swiperimageload'/>
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-control  
        :titles="['流行','新款','精选']"
         @click="tabclick"
          ref="tabControl2"
          />
        <goods-list :goods="showGoods"/>
        </scroll>

        <!-- 修饰.native什么时候使用
          .在我们需要监听一个组件的原生事件，必须给对应的事件加上.native修饰符。才能进行监听
         -->

        <back-top @click.native="backClick"  v-show="ISshow"/>
        <!-- <ul>
            <li>列表1</li>
            <li>列表2</li>
            <li>列表3</li>
            <li>列表4</li>
            <li>列表5</li>
            <li>列表6</li>
            <li>列表7</li>
            <li>列表8</li>
            <li>列表9</li>
            <li>列表10</li>
            <li>列表11</li>
            <li>列表12</li>
            <li>列表13</li>
            <li>列表14</li>
            <li>列表15</li>
            <li>列表16</li>
            <li>列表17</li>
            <li>列表18</li>
            <li>列表19</li>
            <li>列表20</li>
        </ul> -->
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from   'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import backTop from 'components/content/backTop/backTop'

  import HomeSwiper from './childCopmps/HomeSwiper'
  import RecommendView from './childCopmps/RecommendView'
  import FeatureView from 'views/home/childCopmps/FeatureView'

  import {getHomeMultidata,getHomeGoods} from 'network/home'
  import { debounce } from '../../common/utils'


    

export default {
     name:"Home",  
      data() {
           return {
            scroll:null     
          }
      },
     components: {
         NavBar,
         HomeSwiper,
         RecommendView,
         FeatureView,
         TabControl,
         GoodsList,
         Scroll,
         backTop
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
            currentType: "pop",
            ISshow:false,
            taboffsetTop: 0,
            isTabFixed:false,
            saveY:0
         }
     },
      computed:{
          showGoods(){
            return this.goods[this.currentType].list
          }
      },
      destroyed(){
      console.log('home destroyed');
     },
     activated(){
         this.$refs.scroll.scrollTo(0, this.saveY,0)
         this.$refs.scroll.refresh()
     },
     deactivated(){
         this.saveY = this.$refs.scroll.getScrollY()
         console.log(this.saveY)
     },
     created() {
        //  请求多个数据
        this.getHomeMultidata()
        //  请求商品数据
        this.getHomeGoods('pop')

        this.getHomeGoods('news')

        this.getHomeGoods('sell')
          
     },
     mounted(){
        // 1,图片记载 
        const refresh =debounce(this.$refs.scroll.refresh,2000)
            //  监听商品数据
         this.$bus.$on('itemImageLoad',() =>{
        //   console.log('点击数据')
          refresh()
        })
     },
     
    
     methods:{
         /***
          * 事件监听相关方法
          * **/  
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
           this.$refs.tabControl1.currentIndex = index;
           this.$refs.tabControl2.currentIndex = index;
        },
       // 设置滚动   
        backClick(){
            // console.log(2222)
            this.$refs.scroll.scrollTo(0,0,2000)
        },
        // 获取坐标,滚动
        contentScroll(position){
            // console.log(position);
            // 判断BackTop是否显示
        this.ISshow = (-position.y) >500
        //  2.决定tabControl是否吸顶（position:fixed）  
        this.isTabFixed =(-position.y) > this.taboffsetTop    
 

        },
         //  上拉加载更多
        loadMopre(){
            console.log('上拉加载更多');
            this.getHomeGoods(this.currentType)

            // this.$refs.scroll.scroll.refresh()
        },
        swiperimageload(){
                  // 获取tabControl的offsetTop
        // s所以的组件都有一个属性$el:用于获取组件中的元素
    //    赋值
        this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop;

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

            this.$refs.scroll.finishPullup()
            })
         }
        },

     }

</script>

<style scoped>
    #home {
        padding-top: 44px;
        height: 100vh;
        position: relative;
    }   
 
    .nav-bar {
    background-color: var(--color-tint);
    /* font-weight: 700; */
    margin-top: -44px;

    color: #fff;
/*     
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }

   .tab-control{
      position: relative;
      z-index: 9;
   }
    
     .centent{
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
        /* background-color: antiquewhite; */
    }
   
    /* .centent{
        height: calc(100% - 93px);
        overflow: hidden;
       
    } */

</style>