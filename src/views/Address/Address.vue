<template>
    <div class="top">
        <h2 class="top__icon iconfont" @click="handleBackClick">&#xe677;</h2>
        <h2 class="top__title">管理收货地址</h2>
        <router-link to="newaddress">
            <div class="top__new">新建</div>
        </router-link>
    </div>
    <div class="wrapper">
        <h3 class="address__title">我的收货地址</h3>
        <div class="address">
            <div class="address__user">
                 <router-link to="upaddress">
                    <div class="address__user__icon iconfont">&#xe75e;</div>
                 </router-link>
                <div class="address__userInfo">
                    <div class="address__userInfo__name">小慕</div>
                    <div class="address__userInfo__tel">18866669999</div>
                </div>
                <div class="address__userAddress">
                    北京市海淀区西三环北路 2号院 北京理工大学 国防科技园2号楼 10层 
                </div>
                <div class=""></div>
            </div>

        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'; 
export default {
    name: 'Address',
    setup() {
        const router = useRouter();
        const handleBackClick = () => {
            router.back();
        }
        return {
            handleBackClick
        }
    },
}
</script>


<style lang="scss" scoped>
@import '../../style/viriables.scss';
.top{
    display: flex;
    font-size: .16rem;
    color: $content-fontcolor;
    height: .55rem;
    width: 100%;
    line-height: .55rem;
    text-align: center;
    background-color: $bgColor;
    &__icon{
        position: relative;
        top: -.12rem;
        width: .3rem;   
        color: #B6B6B6;
        padding-left: .18rem;
    }
    &__title{
        margin: 0;
        padding: 0;
        flex: 1;
        font-size: .16rem;
        color: #333333;
    }
    a{
    text-decoration: none;
    }
    &__new{
        width: .3rem;
        font-size: .14rem;
        color: #333333;
        padding-right: .18rem;
    }
}
.wrapper{
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: .55rem;
  bottom: 0;
  right: 0;
  padding: 0 .18rem 0 .18rem;
  background-color: rgb(248, 248, 248);
}
.address{
    width: 3.39rem;
    height: 1.04rem;
    background: #FFFFFF;
    border-radius: .04rem;
    &__user{
        position: relative;
        padding: .18rem;
        &__icon{
            position: absolute;
            top: .44rem;
            left: 3.1rem;
            color: #999999;
        }
    }
    &__userInfo{
        display: flex;
        font-size: .14rem;
        color: #999999;
        margin-bottom: .15rem;
        &__name{
            padding-right: .66rem 
        }
    }
    &__userAddress{
        width: 2.6rem;
        height: .6rem;
        font-size: .14rem;
        color: #333333;
    }
}
</style>