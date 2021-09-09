<template>
<!-- 商品列表组件 -->
    <div class="content">
        <!-- 侧边栏 -->
        <div class="category">
            <div 
            :class="{'category__item': true, 'category__item--active' : currentTab === item.tab }"
            v-for="item in categories"
            :key="item.name"
            @click="() =>  handleTabClick( item.tab )"
            >{{ item.name }}</div>
        </div>
        <div class="product">
            <div class="product__item"
            v-for="item in list"
            :key="item._id">
                <img :src="item.imgUrl" alt="" class="product__item__img">
                <div class="product__item__datail">
                    <h4 class="product__item__title">{{ item.name }}</h4>
                    <div class="product__item__sales">月售{{ item.sales }}件</div>
                    <div class="product__item__price">
                        <span class="product__item__yen">&yen;</span>{{ item.price }}
                        <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
                    </div>
                </div>
                <div class="product__number">
                    <span class="product__number__minus"
                    @click="() => { changeCartItem(shopId, item._id, item, -1, shopName)}"
                    >-</span>
                    <!-- 商品选中数量 -->
                    {{ cartList?.[shopId]?.productList?.[item._id]?.count || 0}}
                    <span class="product__number__plus"
                    @click="() => { changeCartItem(shopId, item._id, item, 1, shopName)}"
                    >+</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, toRefs, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { get } from '../../utils/request';
import { useCommonCartEffect } from '../../effects/cartEffects'

const categories = [
        { name:'全部商品', tab :'all'},
        { name:'秒杀', tab :'seckill'},
        { name:'新鲜水果', tab :'fruit'},
    ]
// Tab切换相关逻辑
const useTabEffect = () => {
    const currentTab = ref(categories[0].tab)
    const handleTabClick = ( tab ) => {
        currentTab.value = tab
    } 
    return { handleTabClick, currentTab }
}
// 列表相关逻辑
const useCurrentListEffect = (currentTab, shopId) => {
    const content = reactive({ list: [] })
    const getContextData = async(  ) => {
        // 获取商品信息
        const result = await get(`/api/shop/${shopId}/products`,{
            tab: currentTab.value
        })
        if(result?.error === 0 && result?.data?.length){
        // if(result?.errno === 0 && result?.data?.length){
            content.list = result.data;
        }
    }
    watchEffect(() => { getContextData()})
    const { list } = toRefs( content )
    return { list }
}
// 购物车相关逻辑
const useCartEffect = () => {
    const store = useStore()
    const { cartList, changeCartItemInfo } =  useCommonCartEffect()
    const  updateShopName = (shopId, shopName) => {
        store.commit('updateShopName', { shopId, shopName })
    }
    const changeCartItem = (shopId, productId, item, num, shopName) => {
        changeCartItemInfo(shopId, productId, item, num)
        updateShopName(shopId, shopName)
    }
    return { cartList, changeCartItem }
}

export default {
    name: 'Content',
    props: ['shopName'],
    setup() {
        const route = useRoute()
        const shopId = route.params.id
        const { handleTabClick, currentTab } = useTabEffect()
        const { list } = useCurrentListEffect(currentTab, shopId)
        const { cartList, changeCartItem } = useCartEffect()
        return { list, cartList, currentTab, categories, handleTabClick, shopId, changeCartItem }
    },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.content{
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 1.5rem;
    bottom: .5rem;
}
.category{
    overflow-y: scroll;
    height: 100%;
    width: .76rem;
    background: $search-bgColor;
    &__item{
        line-height: .4rem;
        text-align: center;
        font-size: .14rem;
        color: $content-fontcolor;
        &--active{
            background: $bgColor;
        }
    }
}
.product{
    flex: 1;
    overflow-y: scroll;
    &__item{
        position: relative;
        display: flex;
        padding: .12rem 0;
        margin: 0 .16rem;
        border-bottom: .01rem solid $content-bgColor;
        &__img{
            height: .68rem;
            width: .68rem;
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
        &__sales{
            margin: .06rem 0;
            font-size: .12rem;
            color: $content-fontcolor;
            line-height: .16rem;
        }
        &__price{
            line-height: .2rem;
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
</style>
