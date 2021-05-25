<template>
    <div class="wrapper">
        <UserInfo />
        <div class="userService">
            <div class="userService__wallet">
                <div class="userService__wallet__imgIcon iconfont">&#xe62e;</div>
                <div class="userService__wallet__desc">我的钱包</div>
                <div class="userService__wallet__backIcon iconfont">&#xe75e;</div>
            </div>
            <router-link to="address">
                <div class="userService__address">
                    <div class="userService__address__imgIcon iconfont">&#xe63e;</div>
                    <div class="userService__address__desc">我的地址</div>
                    <div class="userService__address__backIcon iconfont">&#xe75e;</div>
                </div>
            </router-link>
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
import UserInfo from './UserInfo';
export default {
    name: 'Mine',
    components:{ Docker, UserInfo },
    setup() {
        
    },
}
</script>

<style lang="scss" scoped>
.wrapper {
    overflow-y: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: .5rem;
    padding: 0 .18rem;
    background-color: rgb(248, 248, 248);
}
.userService{
    background: #FFFFFF;
    box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
    border-radius: .08rem;
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
    a{
    text-decoration: none;
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