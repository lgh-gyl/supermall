<template>
    <div id="detail">
        <detail-nav-bar></detail-nav-bar>
        <datail-swiper :top-images="topImages"></datail-swiper>
    </div>
</template>
<script>
  
  import DetailNavBar from 'views/detail/childComps/DetailNavBar'
  import DatailSwiper from 'views/detail/childComps/datailSwiper'
  
  import {getDetail,Goods} from 'network/detail'


export default {
  components: {
     DetailNavBar,
    DatailSwiper
   },
     name:"detail",
     data(){
         return{
             iid:null,
             topImages:[],
             goods:{}
         }
     },
     created(){
        //  保存传入的iid
         this.iid =this.$route.params.iid
        
        //  根据iid请求详情数据
        getDetail(this.iid).then(res =>{
            console.log(res)
           const data = res.result

           this.topImages =res.result.itemInfo.topImages

        //    2.获取商品信息
         this.goods = new Goods(data.itemInfo)

        })

     }
}
</script>
<style scoped>

</style>