<template>
    <!-- 确认订单页 -->
    <div class="wrapper">
        <!-- 订单页顶部组件 -->
        <TopArea />
        <!-- 商品列表组件 -->
        <ProductList />
        <!-- 提交订单组件 -->
        <Order />
    </div>
</template>


<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
import  TopArea  from './TopArea.vue'
import  ProductList  from './ProductList.vue'
import  Order  from './Order.vue'

export default {
  name: 'OrderConfirmation',
  components:{ TopArea, ProductList, Order },
    setup() {
        const route = useRoute()
        const shopId = route.params.id
        const { calculations } = useCommonCartEffect(shopId)
        return {  calculations }
    },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eee;
}
</style>