<template>
    <div class="wrapper">
        <div class="userInfo">
            <h2 class="userInfo__name">热心市民李先生</h2>
            <p class="userInfo__id">ID: 1069643013</p>
            <div class="userInfo__delimiter"></div>
            <div class="userInfo__list"></div>
        </div>
        <div class="userService">
            <div class="userService__wallet">
                <div class="userService__wallet__imgIcon .iconfont">&#xe62e;</div>
                <div class="userService__wallet__desc">我的钱包</div>
                <div class="userService__wallet__backIcon .iconfont" v-html="'&#xe75e;'"></div>
            </div>
            <div class="userService__address">
                   <div class="userService__address__imgIcon .iconfont">&#xec88;</div>
                <div class="userService__address__desc">我的地址</div>
                <div class="userService__address__backIcon .iconfont" v-html="'&#xe75e;'"></div>
            </div>
            <div class="userService__help">
                <div class="userService__help__imgIcon .iconfont">&#xe635;</div>
                <div class="userService__help__desc">客服与帮助</div>
                <div class="userService__help__backIcon .iconfont" v-html="'&#xe75e;'"></div>
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
.wrapper {
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 0;
    bottom: .5rem;
    right: 0;
    padding: 0 .18rem;
    background-color: rgb(248, 248, 248);
    // background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 100%);;
}
.userInfo, .userService{
    background: #FFFFFF;
    box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
    border-radius: .08rem;
    margin-top: .9rem;
}
.userInfo{
    width: 3.39rem;
    height: 2.03rem;
    margin-top: .9rem;
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
        &____imgIcon,&__backIcon{
            width: .5rem;
            color: #C2C4CA;
    
        }
    }
}
</style>