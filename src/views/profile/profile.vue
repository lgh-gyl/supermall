<template>
    <div id="profile">
      <nav-bar class="nather"><div slot="center">小马哥商城</div></nav-bar>
       <!-- 1,单独封装一个组件:；利用solt知识点 -->
      <user-info></user-info>
      
      <!-- 2，没有单独封装：不同的地方太多，需要穿过多的参数 -->
      <section class="account">
        <div class="account-item">
        <div class="number">
         <span class="balance">0.00</span>元
        </div>
         <div class="account-info">我的余额</div>
      </div>
    
        <div class="account-item">
        <div class="number">
         <span class="balance">0</span>个
        </div>
         <div class="account-info">我的余额</div>
      </div>

       <div class="account-item">
        <div class="number">
         <span class="balance">0</span>分
        </div>
         <div class="account-info">我的积分</div>
      </div>
      </section>


       <!-- <scroll class="centent"></scroll> -->

    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import NavBar from '../../components/common/navbar/NavBar.vue'
import UserInfo from './childCopmps/UserInfo.vue'

export default {
    name:"Profile",
    components:{
      Scroll,
      NavBar,
      UserInfo
    }
}
</script>

<style scoped>
      /* scroll   */
    /* .centent{
      height: 440px;
      background-color: red;
      overflow: hidden;
    } */
     .nather{
        background-color: var(--color-tint);
        font-weight: 700;
        color: #fff;
    }
    .account{
       display: flex;
       padding: 10px;
       background-color: rgb(212, 211, 208);
    }
    .account-item {
      flex: 1;
      text-align: center;
    }

</style>