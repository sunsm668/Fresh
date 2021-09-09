<template>
    <div class="wrapper">
        <div class="top">
            <h2 class="top__icon iconfont" @click="handleBackClick">&#xe677;</h2>
            <h2 class="top__title">新建收货地址</h2>
            <router-link to="newaddress">
                <div class="top__new"></div>
            </router-link>
        </div>
        <form action="/api/user/address" method="post">
            <div class="newaddressList">
                <div class="newaddressList__city">所在城市：
                    <input type="text" class="newaddressList__input" v-model="如北京市">
                </div>
                <div class="newaddressList__department">小区/大厦/学校：
                    <input type="text" class="newaddressList__input" v-model="如理工大学国防科技园">
                </div>
                <div class="newaddressList__houseNumber">楼号-门牌号：
                    <input type="text" class="newaddressList__input" v-model="A号楼B层">
                </div>
                <div class="newaddressList__name">收货人：
                    <input type="text" class="newaddressList__input" v-model="请填写收货人的姓名">
                </div>
                <div class="newaddressList__phone">联系电话：
                    <input type="text" class="newaddressList__input" v-model="请填写收货手机号">
                </div>
                <input type="submit" class="newaddressList__submit" value="保存">
            </div>
        </form>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'; 

// const useMakeOrderEffect = ( shopId, shopName, productList, showToast ) => {
//     const router = useRouter();
//     const store = useStore();
//     //订单状态逻辑
//     const handleConfirmOrder = async ( isCanceled ) => {
//         const products = [];
//         for( let i in productList.value){
//             const product = productList.value[i];
//             products.push({id: product._id, num: product.count});
//         }
//         try{
//             const result = await post('/api/user/address',{
//                 address: 1,
//                 shopId,
//                 shopName:shopName.value,
//                 isCanceled,
//                 products
//             })
//             if(result.data.error=== 0){
//                 store.commit('clearCartData',shopId);
//                 router.push({ name : 'OrderList'});
//             }
//         } catch (e){
//             // 提示创建地址失败
//             showToast('创建地址失败');
//         }
//     } 
//     return { handleConfirmOrder }
// };

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
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(248, 248, 248);
}
.newaddressList{
    margin-top: .12rem;
    width: 3.75rem;
    height: 2.24rem;
    background: #FFFFFF;
    font-size: .14rem;
    padding: 0 .18rem 0 .18rem;
    &__city,&__department,&__houseNumber,&__name{
        display: flex;
        width: 3.39rem;
        line-height: .44rem;
        color: #666666;
        border-bottom: .01rem solid #F1F1F1;

    }
    &__phone{
        display: flex;
        width: 3.39rem;
        line-height: .44rem;
        color: #666666;
    }
    &__input{
        flex: 1;
        padding: 0 .08rem 0 .08rem;
        border: none;
        outline: none;
    }
    &__submit{
        position: relative;
        top: -2.74rem;
        left: 3.06rem;
        border: none;
        background-color: #fff;
    }
}

</style>