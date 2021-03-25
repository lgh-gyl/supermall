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
             default:false
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
           this.scroll.scrollTo(0,0,time)
        },
        finishPullup(){
            this.scroll.finishPullup()
        }
    }
}
</script>

<style scoped>

</style>