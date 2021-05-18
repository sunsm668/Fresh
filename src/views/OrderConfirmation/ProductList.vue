<template>
    <!-- 商品列表组件 -->
    <div class="products">
        <div class="products__title">
            沃尔玛{{shopName}}
        </div>
        <template
            v-for="item in productList"
            :key="item._id"
        >
            <div class="products__list">
                <div 
                    class="products__item"
                    v-if="item.count > 0"
                >
                    <img :src="item.imgUrl" alt="" class="products__item__img">
                    <div class="products__item__datail">
                        <h4 class="products__item__title">{{item.name}}</h4>
                        <div class="products__item__price">
                            <div class="products__item__single">
                                <span class="products__item__yen">&yen;</span>
                                {{item.price}} x {{item.count}}
                            </div>
                            <div class="products__item__total">
                                <span class="products__item__yen">&yen;</span>
                                {{(item.price*item.count).toFixed(2)}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
export default {
  name: 'ProductList',
    setup() {
        const route = useRoute()
        const shopId = route.params.id
        const { shopName, productList } = useCommonCartEffect(shopId)
        return { shopName, productList }
    },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.products{
    margin: .16rem .18rem .2rem .18rem;
    background-color: $bgColor;
    border-radius: .04rem;
    &__title{
        padding: .16rem;
        font-size: .16rem;
        color: $content-fontcolor;
    }
    &__list{
        max-height: 3.4rem;
        overflow-y: scroll;
    }
    &__item{
        position: relative;
        display: flex;
        padding:  0 .16rem .16rem .16rem;
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
        }
        &__price{
            display: flex;
            margin: .06rem 0 0 0;
            line-height: .2rem;
            font-size: .14rem;
            color: #E93B3B;
        }
        &__total{
            flex: 1;
            color: #000000;
            text-align: right;
        }
        &__yen{
            font-size: .12rem;
        }
    }
}
</style>