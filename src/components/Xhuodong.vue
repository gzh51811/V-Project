<template>
    <div>
        <div class="padding30 bgWhite" style="padding: 0.6rem;margin-top: 0.6rem;background:#FCFCFC;">
				<div class="clearfix huadongTitle"> 
					<div class="left huodongyinyuan">活动应援</div>
					<div class="right gengduo"><a>更多&gt;</a></div>
				</div>
				<ul class="clearfix listOne"><li class="huadongLi">
								<div class="shopImg" data-id="5148" data-type="support">
									<img src="" alt="">
									<img src="" alt="">
									<div class="dujia">开屏</div>
								</div>
								<div class="name">【XIUMIN金珉锡吧】金珉锡0326生日开屏应援活动</div>
								<div class="clearfix">
									<div class="img left"><img src="" id="virtualuser_id" data-id="76560" alt=""></div>
									<div class="left person">XIUMIN金珉锡吧</div>
								</div>
							</li><li class="huadongLi">
								<div class="shopImg" data-id="5132" data-type="support">
									<img src="" alt="">
									<img src="" alt="">
									<div class="dujia">活动应援</div>
								</div>
								<div class="name">NINE PERCENT0406出道一周年开屏应援</div>
								<div class="clearfix">
									<div class="img left"><img src="" id="virtualuser_id" data-id="10221046" alt=""></div>
									<div class="left person">NINEPERCENT_TOWN</div>
								</div>
							</li><li class="huadongLi">
								<div class="shopImg" data-id="4982" data-type="support">
									<img src="" alt="">
									<img src="" alt="">
									<div class="dujia">生日应援</div>
								</div>
								<div class="name">【开屏应援】光芒赫宰ShineHyuk李赫宰0404生日开屏应援</div>
								<div class="clearfix">
									<div class="img left"><img src="" id="virtualuser_id" data-id="58083" alt=""></div>
									<div class="left person">光芒赫宰ShineHyuk</div>
								</div>
							</li><li class="huadongLi">
								<div class="shopImg" data-id="4891" data-type="support">
									<img src="" alt="">
									<img src="" alt="">
									<div class="dujia">生日应援</div>
								</div>
								<div class="name">【南太铉吧_FollowNam】南太铉生日开屏应援</div>
								<div class="clearfix">
									<div class="img left"><img src="" id="virtualuser_id" data-id="116249" alt=""></div>
									<div class="left person">南太铉吧_FollowNam</div>
								</div>
							</li></ul>
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
.huadongTitle{
    padding: 0.6rem;
    margin: 0.6rem 0;
    margin-top: 0.6rem;

}
.huodongyinyuan{
    color: #333333;
    font-size: 0.72rem;
    font-weight: bold;
}
.right{
    float: right;
}
.left{
    float: left;
}
/* a{
    text-decoration: none;
    display: block;
    outline: none;
} */
.gengduo{
    font-size: 0.64rem;
    color: #FD6175;
}


li{
    list-style: none;
    float: left;
}
.huadongLi{
    width: 49%;
    margin-bottom: 0.6rem;
    height: 160.59px;
}

.shopImg{
    width: 90%;
    border-radius: 0.2rem;
    overflow: hidden;
    position: relative;
    height: 76px;
}
.shopImg img:nth-child(1) {
    width: 100%;
}

.shopImg img:nth-child(2) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40%;
}

.dujia{
    color: white;
    font-size: 0.4rem;
    position: absolute;
    left: 5%;
    bottom: 3%;
}

.name{
    color: #333333;
    font-size: 0.6rem;
    overflow: hidden;
    height: 1rem;
    line-height: 1rem;
    width: 90%;
    margin-bottom: 0.4rem;
    margin-top: 0.6rem;
}


.img{
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-left: 0.4rem;
}
.img img{
    width: 100%;
    height: 100%;
    display: block;
}
.person{
        color: #666666;
    font-size: 0.4rem;
    height: 1rem;
    line-height: 1rem;
    margin-left: 0.4rem;
}
img{
    display: block;
}
    
</style>