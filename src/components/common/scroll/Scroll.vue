<template>
    <div class="wepper" ref="wapper">
        <div class="centent"> 
            <slot></slot>
        </div>        
    </div>
</template>
<script>

import BScroll from 'better-scroll'

export default {
    name:"Scroll",
    props:{
        probeType:{
            type:Number,
            default: 0
        },
         pullUpLoad:{
             type:Boolean,
             default:true
         }
    },
    data() {
        return {
            scroll:null
        }
    },
    mounted(){
        // ref如果是绑定在组件中的，那么通过this.$refs.refname 获得到的是一个组件对象 
        // ref如果是绑定在袁术中的，那么通过this.$refs.refname 获得到的是一个元素对象   
        //   console.log(this.$refs.wapper,222222)
        // debugger
        // 1.创建BScroll对象   
        this.scroll = new BScroll(this.$refs.wapper,{
            click:true,
            probeType: this.probeType,
            pullUpLoad:this.pullUpLoad
        })

        // console.log(this.scroll,22);
        // 2监听滚动的位置
        this.scroll.on('scroll', (position) =>{
            // console.log(position);
            // 自定义事件
            this.$emit('scroll',position)
        })
        // 3,监听上拉事件
        this.scroll.on('pullingUp',()=>{
            // console.log('上拉加载更多');
            this.$emit("pullingUp")
        })
    },
    methods:{
        scrollTo(x, y, time=300){
        this.scroll &&  this.scroll.scrollTo(0,0,time)
        },
        finishPullup(){
         this.scroll  &&  this.scroll.finishPullup()
        },
        refresh(){
          this.scroll &&  this.scroll.refresh()
        },
        getScrollY() {
            return this.scroll ? this.scroll.y : 0
        }
    }
}
</script>

<style scoped>

</style>