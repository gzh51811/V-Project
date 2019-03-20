<template>
    <div>
        <div class="xiaobian" style="float:left;">
				<div style="display:flex;justify-content:center; align-content:center;width: 90%;margin: 0 auto;">
					<div class="line"></div>
					<div class="circle"></div>
					<div class="jinxuan">小娱精选 为你推荐</div>
					<div class="circle"></div>
					<div class="line"></div>
				</div>
				
			</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
};
</script>

<style scoped>
 .xiaobian{
    height: 2rem;
    padding: 0.6rem 0;
    width: 100%;
    line-height: 2rem;
 }
 
 .jinxuan{
     font-size: 0.6rem;
    color: #999999;
    height: 0.6rem;
    margin: 0 0.3rem;
 }
 .circle{
         width: 0.2rem;
    height: 0.2rem;
    background: #FC4F4F;
    border-radius: 0.1rem;
    margin-top: 0.93rem;
 }
 .line{
    width: 3rem;
    height: 1px;
    background: #FC4F4F;
    margin-top: 0.98rem;
 }
</style>
