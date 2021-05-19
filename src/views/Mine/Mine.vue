<template>
    <div class="wrapper">
        <div class="userInfo">
            <h2 class="userInfo__name">热心市民李先生</h2>
            <p class="userInfo__id">ID: 1069643013</p>
            <div class="userInfo__delimiter"></div>
            <ol class="userInfo__list">
                <li class="userInfo__redEnvelopes">红包
                    <div class="userInfo__redEnvelopes__desc">218</div>
                </li>
                <li class="userInfo__coupon">优惠券
                    <div class="userInfo__coupon__desc">12张</div> 
                </li>
                <li class="userInfo__freshBeans">鲜豆
                    <div class="userInfo__freshBeans__desc">88</div>
                </li>
                <li class="userInfo__whiteStripe">白条
                    <div class="userInfo__whiteStripe__desc">1000</div>
                </li>
            </ol>
        </div>
        <div class="userService">
            <div class="userService__wallet">
                <div class="userService__wallet__imgIcon iconfont">&#xe62e;</div>
                <div class="userService__wallet__desc">我的钱包</div>
                <div class="userService__wallet__backIcon iconfont">&#xe75e;</div>
            </div>
            <div class="userService__address">
                   <div class="userService__address__imgIcon iconfont">&#xe63e;</div>
                <div class="userService__address__desc">我的地址</div>
                <div class="userService__address__backIcon iconfont">&#xe75e;</div>
            </div>
            <div class="userService__help">
                <div class="userService__help__imgIcon iconfont">&#xe635;</div>
                <div class="userService__help__desc">客服与帮助</div>
                <div class="userService__help__backIcon iconfont">&#xe75e;</div>
            </div>
        </div>
    </div>
    <Docker :currentIndex="3"/>
</template>


<script>
import Docker from '../../components/Docker';
export default {
    name: 'Mine',
    components:{ Docker },
    setup() {
        
    },
}
</script>

<style lang="scss" scoped>
// .mask{
//     position: absolute;
//     left: -.5rem;
//     top: -.8rem;
//     width: 4.75rem;
//     height: 3rem;
//     border-radius: 50%;
//     background-image: linear-gradient(
//     240deg
//     , #3A6FF3 0%, #50C7FB 100%);
//     z-index: -1;
//     }
.wrapper {
    overflow-y: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: .5rem;
    padding: 0 .18rem;
    background-color: rgb(248, 248, 248);
    background-image: linear-gradient(240deg, #3A6FF3 0%, #50C7FB 100%);
}
.userInfo, .userService{
    background: #FFFFFF;
    box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
    border-radius: .08rem;
}
.userInfo{
    width: 3.39rem;
    height: 2.03rem;
    margin-top: .9rem;
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
.userService{
    width: 3.39rem;
    height: 1.44rem;
    margin-top: .16rem;
    &__wallet,&__address,&__help{
        height: .48rem;
        display: flex;
        font-size: .14rem;
        line-height: .48rem;
        color: #262626;
        &__desc{
            flex: 1;
        }
        &__imgIcon,&__backIcon{
            padding:  0 .12rem 0 .16rem;
            color: #C2C4CA;
            text-align: center;
    
        }
    }
    &__wallet__imgIcon{
        color: #ED4A47;
    }
    &__address__imgIcon{
        color: #32C5FF;
    }
    &__help__imgIcon{
        color: #9013FE;
    }
}
</style>