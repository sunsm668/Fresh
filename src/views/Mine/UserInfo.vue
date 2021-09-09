<template>
    <div class="background"></div>
        <div class="userInfo">
            <img src="//img4.sycdn.imooc.com/601cf2f3000151f409660966-140-140.jpg" alt="头像" class="userInfo__avatar">
            <h2 class="userInfo__name">K</h2>
            <p class="userInfo__id">ID: 1099643012</p>
            <div class="userInfo__delimiter"></div>
            <ol class="userInfo__list">
                <li class="userInfo__redEnvelopes">红包
                    <div class="userInfo__redEnvelopes__desc">168</div>
                </li>
                <li class="userInfo__coupon">优惠券
                    <div class="userInfo__coupon__desc">16张</div> 
                </li>
                <li class="userInfo__freshBeans">鲜豆
                    <div class="userInfo__freshBeans__desc">106</div>
                </li>
                <li class="userInfo__whiteStripe">白条
                    <div class="userInfo__whiteStripe__desc">8000</div>
                </li>
            </ol>
        </div>
</template>


<script>
export default {
    setup() {
        
    },
}
</script>
<style lang="scss" scoped>
.background{
    position: relative;
    width: 4.75rem;
    height: 3rem;
    transform: translate(-15%, -20%);
    border-radius: 50%;
    background-image: linear-gradient(240deg, #3A6FF3 0%, #50C7FB 100%);
}
.userInfo{
    position: absolute;
    top: .9rem;
    left: .18rem;
    right: .18rem;
    width: 3.39rem;
    height: 2.03rem;
    background: #FFFFFF;  
    box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
    border-radius: .08rem;
    &__avatar{
      position: absolute;
      top: -.5rem;
      left: 1.25rem; 
      width: .94rem;
      height: .94rem;
      border-radius: 50%; 
    }
    &__name{
        font-size: .24rem;
        color: #262628;
        text-align: center;
        line-height: .36rem;
        margin: 0;
        padding-top: .59rem;
    }
    &__id{
        font-size: .14rem;
        color: #C1C0C9;
        text-align: center;
        margin: .02rem 0 .12rem 0;
    }
    &__delimiter{
        width: 3.39rem;
        height: .01rem;
        background: #F1F1F1;
    }
    &__list{
        display: flex;
        list-style: none;
        margin-top: .12rem;
        padding: 0;
        height: .76rem;
        width: 100%;
    }
    &__redEnvelopes,&__coupon,&__freshBeans,&__whiteStripe{
        width: 25%;
        font-size: .12rem;
        line-height: .17rem;
        color: #C1C0C9;
        text-align: center;
        &__desc{
            margin-top: .08rem;
            font-size: .2rem;
            color: #262628;
            text-align: center;
        }
    }

}
</style>