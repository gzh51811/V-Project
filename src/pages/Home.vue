<template>
    <div class='home'>
       
        <Xheader />
         <Xlubolun />
         <Xlubolun2 />
         <Xhuodong />
    </div>
</template>

<script>
import Xheader from '../components/Xheader'
import Xlubolun from '../components/Xlunbotu'
import Xlubolun2 from '../components/Xlunbotu2'
import Xhuodong from '../components/Xhuodong'
export default {
    data(){
        return {}
    },
    components:{
        
        Xheader,
        Xlubolun,
        Xlubolun2,
        Xhuodong
    }
}
</script>

<style scoped>
.home{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
}
</style>
