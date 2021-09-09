<template>
    <!-- 提交订单组件 -->
    <div class="order">
        <div class="order__price">实付金额 
            <span class="order__price__num">
                <b>¥{{calculations.price}}</b>
            </span>
        </div>
        <div class="order__btn" @click="handleShowConfirm()">
            提交订单
        </div>
        <div class="mask"
            v-show="showConfirm"
            @click="handleShowConfirm()" 
        >
            <div class="mask__content" @click.stop>
                <h3 class="mask__content__title">确认要离开收银台？</h3>
                <p  class="mask__content__desc">请尽快完成支付，否则将被取消</p>
                <div class="mask__content__btns">
                    <div class="mask__content__cancel" @click="handleConfirmOrder(true)">取消订单</div>
                    <div class="mask__content__confirm" @click="() =>handleConfirmOrder(false)">确认支付</div>
                </div>
            </div>
        </div>
    </div>
    <Toast v-if="show" :message="toastMessage"/>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { post } from '../../utils/request';
import { useCommonCartEffect } from '../../effects/cartEffects';
import Toast, { useToastEffect } from '../../components/Toast';

// 下单相关逻辑
const useMakeOrderEffect = ( shopId, shopName, productList, showToast ) => {
    const router = useRouter();
    const store = useStore();
    //订单状态逻辑
    const handleConfirmOrder = async ( isCanceled ) => {
        const products = [];
        for( let i in productList.value){
            const product = productList.value[i];
            products.push({id: product._id, num: product.count});
        }
        try{
            const result = await post('/api/order',{
                address: 1,
                shopId,
                shopName:shopName.value,
                isCanceled,
                products
            })
            if(result.data.error=== 0){
            // if(result.data.errno=== 0){
                store.commit('clearCartData',shopId);
                router.push({ name : 'OrderList'});
            }
        } catch (e){
            // 提示下单失败
            showToast('下单失败');
        }
    } 
    return { handleConfirmOrder }
};
//提交订单弹层逻辑
const useShowMaskEffect = () =>{
    const showConfirm = ref(false);
    const handleShowConfirm = () => {
        showConfirm.value = !showConfirm.value;
    };
    return { showConfirm, handleShowConfirm }
};

export default {
    name: 'Order',
    components: { Toast },
    setup() {
        const route = useRoute();
        const shopId = route.params.id;
        const { productList, calculations, shopName } = useCommonCartEffect(shopId);
        const {  show, toastMessage, showToast  } = useToastEffect();
        const { handleConfirmOrder } = useMakeOrderEffect( shopId, shopName, productList, showToast );
        const { showConfirm, handleShowConfirm } = useShowMaskEffect();
        return {  
            productList, calculations, shopName, 
            handleConfirmOrder, handleShowConfirm,showConfirm,
            show, toastMessage, showToast  
        };
    },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.order{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: .49rem;
    background-color: $bgColor;
    &__price{
        flex: 1;
        font-size: .14rem;
        color: $content-fontcolor;
        text-align: right;
        line-height: .49rem;
        margin-left: .24rem;
        text-align: left;
        &__num{
            font-size: .16rem;
        }
    }
    &__btn{
        width: .98rem;
        line-height: .49rem;
        text-align: center;
        background-color: #4FB0F9 ;
        font-size: .14rem;
        color: $bgColor;
    }
}
.mask{
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.50);
    &__content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 3rem;
        height: 1.57rem;
        background-color: #fff;
        border-radius: .04rem;
        &__title{
            margin: .24rem 0 .08rem 0;
            font-size: .18rem;
            color: #333333;
            text-align: center;
        }
        &__desc{
            font-size: .14rem;
            color: #666666;
            text-align: center;
        }
        &__btns{
            display: flex;
            font-size: .14rem;
            color: #666666;
            margin: .24rem .58rem;
        }
        &__cancel,&__confirm{
            width: .8rem;
            height: .32rem;
            font-size: .14rem;
            text-align: center;
            line-height: .32rem;
            border-radius: .16rem;
        }
        &__cancel{
            color: #0091FF;
            border: .01rem solid #4FB0F9;
            border-radius: .16rem;
            background: #fff;
            margin-right: .24rem;
        }
        &__confirm{
            color: #fff;
            border: .01rem solid #4FB0F9;
            border-radius: .16rem;
            background: #4FB0F9;

        }
    }
}
</style>