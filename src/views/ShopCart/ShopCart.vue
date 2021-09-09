<template>
<!-- 购物车页 -->
    <div class="title">我的全部购物车（2）</div>
    <div class="wrapper">
        <div class="shoplist">
            <div class="shop"
            v-for="item in nearbyList"
            :key="item._id">
                <h2 class="shop__name">{{item.name}}</h2>
                <!-- <div class="product"
                v-for="innerItem in productList"
                :key="innerItem._id">
                    <div class="product__item">
                        <img :src="innerItem.imgUrl" alt="" class="product__item__img">
                        <div class="product__item__datail">
                            <h4 class="product__item__title">{{innerItem.name}}</h4>
                            <div class="product__item__price">
                                <div class="product__item__yen">&yen;{{innerItem.price}} x {{}}</div>
                                <div class="product__item__origin">&yen;{{innerItem.oldPrice}}</div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
    <Docker :currentIndex="1"/>
</template>

<script>
import { ref } from 'vue';
import { get } from '../../utils/request';
import Docker from '../../components/Docker';
import { useCommonCartEffect } from '../../effects/cartEffects';


//获取商店列表
const getNearbyListEffect = () => {
  const nearbyList = ref([]);
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if(result?.error === 0 && result?.data?.length){
      nearbyList.value = result.data;
    }
  } 
  return { nearbyList, getNearbyList }
}

//根据每个商店的id，获取每个商店的商品信息
// const getProductListEffect = (id) => {
//     const productList = ref([]);
//     const getProductList = async () => {
//         const result = await get(`/api/shop/${id}/products`)
//         if(result?.error === 0 && result?.data?.length){
//             productList.value = result.data;
//             console.log(productList,'productList')
//         }
//   } 
//   return { productList, getProductList }
// }
export default {
    name:'ShopCart',
    components: { Docker },
    
    setup() {
        const { nearbyList, getNearbyList } = getNearbyListEffect()
        console.log(nearbyList,'nearbyList1')
        console.log(nearbyList._id,'nearbyList2')
    
        let id ='60aa2e60eb8ac136acc99777';
        // const { productList, getProductList } = getProductListEffect(id)
        const { cartList } = useCommonCartEffect(id);
        // console.log(calculations, changeCartItemInfo, productList )
        // console.log(shopId)
        getNearbyList();
        console.log(cartList.shopId,'cartList')
        // getProductList();
        return { nearbyList, cartList };
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
.shop{
    margin: .16rem;
    padding: .16rem;
    background: $bgColor;
    border-radius: 0.06rem;
    &__name{
        font-size: .16rem;
        color: #333333;
    }
}
.product{
    flex: 1;
    overflow-y: scroll;

    &__item{
        position: relative;
        display: flex;
        padding: .12rem 0;
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
            display: flex;
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