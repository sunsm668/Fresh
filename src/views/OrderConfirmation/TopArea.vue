<template>
    <!-- 订单页顶部组件 -->
    <div class="top">
        <div class="top__header">
            <div class="iconfont top__header__back" 
            @click="handleBackclick">&#xe677;</div>
            确认订单
        </div>
        <div class="top__receiver">
            <div class="top__receiver__title">收货地址</div>
            <div class="top__receiver__address">北京理工大学国防科技园2号楼10层</div>
            <div class="top__receiver__info">
                <span class="top__receiver__info__name">瑶妹（先生）</span>
                <span class="top__receiver__info__tel">18911024266</span>
            </div>
            <div class="iconfont top__receiver__enter">&#xe677;</div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'TopArea',
    setup() {
        const router = useRouter()
        // 返回上一个页面
        const handleBackclick = () => { router.back() }
        return { handleBackclick }
    },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.top{
    position: relative;
    height: 1.96rem;
    background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
    &__header{
        position: relative;
        padding-top: .25rem;
        line-height: .24rem;
        color: $bgColor;
        text-align: center;
        font-size: .16rem;
        &__back{
            position: absolute;
            margin-left: .18rem; 
            font-size: .22rem;
        }
    }
    &__receiver{
        position: absolute;
        left: .18rem;
        right: .18rem;
        bottom: 0;
        height: 1.11rem;
        background-color: $bgColor;
        border-radius: .04rem;
        &__title{
            padding: .16rem 0 .14rem .16rem;
            font-size: .16rem;
            line-height: .22rem;
            color: #333;
        }
        &__address{
            padding: 0 .4rem 0 .16rem;
            font-size: .14rem;
            line-height: .2rem;
            color: #333;
        }
        &__info{
            padding: .06rem 0 0 .16rem;
            &__name,&__tel{
                margin-right: .06rem;
                font-size: .12rem;
                line-height: .18rem;
                color: #666;
            }
        }
        &__enter{
            position: absolute;
            top:.55rem;
            right: .16rem;
            transform: rotate(180deg);
            line-height: .18rem;
            color: #666;
        }
    }
}
</style>