<template>
<!-- 蒙层特效 -->
<div class="mask" v-if="showCart"></div>
<!-- 底部购物车组件 -->
    <div class="cart">
        <div class="product" v-if="showCart">
            <div class="product__header">
                <div class="product__header__all" @click="() => setCartItemsChecked(shopId)">
                    <span 
                    class="product__header__icon iconfont"
                    v-html="allChecked ? '&#xe652;' : '&#xe667;' "
                    ></span>
                    全选
                </div>
                <div 
                class="product__header__clear"
                @click="() => cleanCartProducts(shopId)"
                >清空购物车
                </div>
            </div>
            <div class="product__item"
            v-for="item, in productList"
            :key="item._id">
            <!-- 购物车商品选中按键 -->
            <div class="product__item__checked iconfont"
            v-html="item.check ? '&#xe652;' : '&#xe667;' "
            @click="() => changeCartItemChecked( shopId, item._id )">
            </div>
                <img :src="item.imgUrl" alt="" class="product__item__img">
                <div class="product__item__datail">
                    <h4 class="product__item__title">{{ item.name }}</h4>
                    <div class="product__item__price">
                        <span class="product__item__yen">&yen;</span>{{ item.price }}
                        <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
                    </div>
                </div>
                <!-- 商品数量加减 -->
                <div class="product__number">
                    <span class="product__number__minus"
                    @click="() => { changeCartItemInfo(shopId, item._id, item, -1)}"
                    >-</span>
                    {{ item.count || 0}}
                    <span class="product__number__plus"
                    @click="() => { changeCartItemInfo(shopId, item._id, item, 1)}"
                    >+</span>
                </div>
            </div>
        </div>
        <div class="check">
            <div class="check__icon">
                <img 
                src="http://www.dell-lee.com/imgs/vue3/basket.png" 
                alt="购物车" 
                class="check__icon__img"
                @click="handleCartShowchange">
                <div class="check__icon__tag">
                    {{ total }}             <!-- 加入购物车的商品数量 -->
                    </div>   
            </div>
            <div class="check__total">
                <span>总计:&nbsp;</span>
                <span class="check__total__price">
                    &yen; {{ price }}       <!-- 加入购物车的商品数量总金额 -->
                    </span>
            </div>
            <div class="check__settlement">
                去结算
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from './commonCartEffect'

// 获取购物车信息相关逻辑
const useCartEffect = () => {
    const { changeCartItemInfo } = useCommonCartEffect()
    const store = useStore()
    const route = useRoute()
    const shopId = route.params.id
    const cartList = store.state.cartList
    // 计算加入购物车的商品数量
    const total = computed(() => {
        const productList = cartList[shopId]
        let count = 0
        if(productList){
            for(let i in productList){
                const product = productList[i]
                if(product.check){
                    count += product.count
                }
            }
        }
        return count
    })
    // 计算加入购物车的商品数量总金额
    const price = computed(() => {
        const productList = cartList[shopId]
        let count = 0
        if(productList){
            for(let i in productList){
                const product = productList[i]
                if(product.check){
                    count += ( product.count * product.price )
                }
            }
        }
        // 加入购物车的商品数量总金额保留两位小数
        return count.toFixed(2)
    })
    // 底部全选按钮状态逻辑
    const allChecked = computed(() => {
        const productList = cartList[shopId]
        let result = true
        if(productList){
            for(let i in productList){
                const product = productList[i]
                if(product.count>0 && !product.check){
                    result = false
                }
            }
        }
        return result
    })
    const productList = computed(() => {
        const productList = cartList[shopId] || []
        return productList
    })
    // 购物车商品选中按键逻辑
    const changeCartItemChecked = ( shopId,  productId) => {
        store.commit('changeCartItemChecked', { shopId, productId })
    }
    // 清除购物车逻辑
    const cleanCartProducts = ( shopId ) => {
        store.commit('cleanCartProducts', { shopId })
    }
    // 全选按钮逻辑
    const setCartItemsChecked = ( shopId ) => {
        store.commit('setCartItemsChecked', { shopId })
    }
    return { total, price, productList, shopId, cleanCartProducts,
        changeCartItemChecked, changeCartItemInfo, allChecked, setCartItemsChecked
    }
}
export default {
    name :'Cart',
    setup() {
        const showCart = ref(false)
        // 购物车按钮逻辑
        const handleCartShowchange = () => {
            showCart.value = !showCart.value
        }
        const { total, price, productList, shopId, cleanCartProducts,
            changeCartItemChecked, changeCartItemInfo, allChecked, setCartItemsChecked
        } = useCartEffect();
      return { total, price, productList, shopId, cleanCartProducts, handleCartShowchange,
            changeCartItemChecked, changeCartItemInfo, allChecked, setCartItemsChecked, showCart
        } 
    },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.mask{
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.50);
}
.cart{
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
}
.product{
    flex: 1;
    overflow-y: scroll;
    background: $bgColor;
    &__header{
        display: flex;
        height: .52rem;
        border-bottom: 1px solid $content-bgColor;
        &__icon{
            font-size: .2rem;
            margin-right: .16rem;
            margin-left: .1rem;
            color: #0091FF;
        }
        &__clear,&__all{
            font-size: .14rem;
            line-height: .52rem;
            color: $content-fontcolor;
        }
        &__clear{
            flex: 1;
            margin-right: .18rem;
            text-align: right;
        }
        &__all{
            margin-left: .18rem;
            text-align: left;
        }
    }
    &__item{
        position: relative;
        display: flex;
        padding: .12rem 0;
        margin: 0 .16rem;
        border-bottom: .01rem solid $content-bgColor;
        &__checked{
            color: #0091FF;
            font-size: .2rem;
            line-height: .46rem;
            margin-right:.16rem;
            margin-left: .12rem;
        }
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
            overflow: hidden;
        }
        &__price{
            line-height: .2rem;
            margin-top: .06rem;
            font-size: .14rem;
            color: #E93B3B;
        }
        &__yen{
            font-size: .12rem;
        }
        &__origin{
            margin-left: .06rem;
            font-size: .12rem;
            color: #999999;
            line-height: .2rem;
            text-decoration: line-through;
        }
    }
    &__number{
        position: absolute;
        right: 0;
        bottom: .12rem;
        &__plus,&__minus{
            display: inline-block;
            width: .2rem;
            height: .2rem;
            border-radius: 50%;
            line-height: .2rem;
            text-align: center;
        }
        &__minus{
            border: .01rem solid #666666;
            color: #666666;
            margin-right: .08rem;
        }
        &__plus{
            background: #0091FF;
            color: $bgColor;
            margin-left: .08rem;
            border: .01rem solid #0091FF;
        }
    }
}
.check{
    display: flex;
    height: .5rem;
    background: $bgColor;
    box-shadow: 0 .01rem .01rem 0 $content-bgColor;
    &__icon{
        margin-left: .24rem;
        position: relative;
        &__img{
            margin-top: .11rem;
            width: .28rem;
            height: .26rem;
        }
        &__tag{
            position: absolute;
            top: 0;
            left: .15rem;
            min-width: .2rem;
            height: .2rem;
            border-radius: .1rem;
            line-height: .2rem;
            font-size: .16rem;
            text-align: center;
            color: $bgColor;
            background: #E93B3B;
            transform: scale(.5);
        }
    }
    &__total{
        flex: 1;
        line-height: .5rem;
        font-size: .14rem;
        margin-left: .32rem;
        font-size: .12rem;
        color: $content-fontcolor;
        &__price{
            font-size: .18rem;
            color: #E93B3B;
        }
    }
    &__settlement{
        width: 1rem;
        background: #4FB0F9;
        line-height: .5rem;
        font-size: .14rem;
        text-align: center;
        color: $bgColor;
    }
}

</style>