<template>
<!-- 购物车页 -->
    <div class="title">我的全部购物车（2）</div>
    <div class="wrapper">
        <div class="orders">
            <div class="order">
                <div class="product">
                    <div class="product__item">
                        <img src="" alt="" class="product__item__img">
                        <div class="product__item__datail">
                            <h4 class="product__item__title">111</h4>
                            <div class="product__item__price"
                            >
                                <span class="product__item__yen">&yen;</span>222
                                <span class="product__item__origin">&yen;33</span>
                            </div>
                        </div>
                        <!-- <div class="product__item__datail">
                            <h4 class="product__item__title">{{ item.name }}</h4>
                            <div class="product__item__price"
                            v-for="(innerItem, innerIndex) in productList"
                            :key="innerIndex"
                            >
                                <span class="product__item__yen">&yen;</span>{{ innerIndex.price }}
                                <span class="product__item__origin">&yen;{{ innerIndex.total }}</span>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Docker :currentIndex="1"/>
</template>

<script>
import { useRoute } from 'vue-router'
import Docker from '../../components/Docker';
import { useCommonCartEffect } from '../../effects/cartEffects';

export default {
    name:'ShopCart',
    components: { Docker },
    setup() {
        const route = useRoute();
        const shopId = route.params.id;
        const { 
        calculations, changeCartItemInfo, productList 
        } = useCommonCartEffect(shopId);
        console.log(productList)
        console.log(calculations)
        return { calculations, changeCartItemInfo, productList };
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.title{
    font-size: .16rem;
    color: $content-fontcolor;
    height: .55rem;
    line-height: .55rem;
    text-align: center;
    background-color: $bgColor;
}
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: .55rem;
  bottom: .5rem;
  right: 0;
  background-color: rgb(248, 248, 248);
}

.order{
    margin: .16rem .18rem;
    padding: .16rem;
    background-color: $bgColor;
    border-radius: .04rem;
    &__title{
        display: flex;
    }
    &__shopName{
        flex: 1;
        font-size: .16rem;
        color: $content-fontcolor;
        margin-bottom: .16rem;
    }
    &__status{
        font-size: .14rem;
        color: #999999;
        text-align: right;
    }
    &__content{
        display: flex;
        &__imgs{
            display: flex;
            flex: 1;
        }
        &__img{
            width: .4rem;
            height: .4rem;
            margin-right: .12rem;
        }
    }
    &__info{
        &__price{
           font-size: .14rem;
            color: #E93B3B;
            text-align: right; 
            line-height: .2rem;
            margin-bottom: .04rem;
        }
        &__count{
            font-size: .12rem;
            color: $content-fontcolor;
            text-align: right;
            line-height: .14rem;
        }
    }
}
.product{
    flex: 1;
    overflow-y: scroll;
    background: $bgColor;
    &__item{
        position: relative;
        display: flex;
        padding: .12rem 0;
        margin: 0 .16rem;
        border-bottom: .01rem solid $content-bgColor;
        &__img{
            height: .46rem;
            width: .46rem;
            margin-right: .16rem;
        }
        &__title{
            margin: 0;
            line-height: .2rem;
            font-size: .14rem;
            color: $content-fontcolor;
            @include ellipsis;
        }
        &__datail{
            flex: 1;
            overflow: hidden;
        }
        &__price{
            line-height: .2rem;
            margin-top: .06rem;
            font-size: .14rem;
            color: #E93B3B;
        }
        &__yen{
            flex: 1;
            font-size: .12rem;
        }
        &__origin{
            font-size: .14rem;
            color: #000000;
            line-height: .2rem;
        }
    }
}
</style>