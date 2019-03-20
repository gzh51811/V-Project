<template>
    <div class='home'>
       
        <Xheader />
         <Xlubolun />
         <Xlubolun2 />
         <Xhuodong />
         <Xdujia />
         <Xmingxing />
         <Xtuijian />
         <Xjingxuan />

    </div>
</template>

<script>
import Xheader from '../components/Xheader'
import Xlubolun from '../components/Xlunbotu'
import Xlubolun2 from '../components/Xlunbotu2'
import Xhuodong from '../components/Xhuodong'
import Xdujia from '../components/Xdujia'
import Xmingxing from '../components/Xmingxing'
import Xtuijian from '../components/Xtuijian'
import Xjingxuan from '../components/Xjingxuan'
export default {
    data(){
        return {}
    },
    components:{
        
        Xheader,
        Xlubolun,
        Xlubolun2,
        Xhuodong,
        Xdujia,
        Xmingxing,
        Xtuijian,
        Xjingxuan
    }
}
</script>

<style scoped>
.home{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 50px;
    overflow: auto;
    /* background: #ccc; */
    
}

</style>
