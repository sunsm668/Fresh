<template>
    <div class="title">我的订单</div>
    <div class="wrapper">
        <div class="orders">
            <div class="order"
            v-for="(item, index) in list"
            :key="index">
                <div class="order__title">
                    <div class="order__shopName">{{item.shopName}}</div>
                    <div class="order__status">{{item.isCanceled? '已取消':'已下单'}}</div>
                </div>
                <div class="order__content">
                    <div class="order__content__imgs">
                        <template
                        v-for="(innerItem, innerIndex ) in item.products"
                        :key="innerIndex"
                        >
                            <img
                            class="order__content__img"
                            :src="innerItem.product.img"
                            v-if="innerIndex <= 3"
                            />
                        </template>
                    </div>
                    <div class="order__info">
                        <div class="order__info__price">¥{{ item.totalPrice }}</div>
                        <div class="order__info__count">共{{ item.totalNum }}件</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Docker :currentIndex="2"/>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { get } from '../../utils/request';
import Docker from '../../components/Docker';

// 处理订单页表逻辑
const useOrderListEffect = () => {
    const data = reactive( { list: [] } );
    const getNearbyList = async () => {
        const result = await get('/api/order')
        // 获取订单信息
        if(result?.error === 0 && result?.data?.length){
            const orderList = result.data;
            orderList.forEach((order) => {
                const products = order.products || [];
                let  totalPrice = 0;
                let  totalNum = 0;
                products.forEach(( product ) => {
                    totalPrice += ((product?.orderSales * product?. product.price) || 0);
                    totalNum += (product?.orderSales || 0);
                })
                order.totalPrice = totalPrice.toFixed(2);
                order.totalNum = totalNum;
            })
            data.list = result.data;
    console.log(data.list)
        }
    } 
    getNearbyList();
    const { list } = toRefs(data);
    return { list };
}
export default {
    name:'OrderList',
    components: { Docker },
    setup() {
        const { list } = useOrderListEffect();
        return { list };
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
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
// .orders{
    
// }
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
</style>