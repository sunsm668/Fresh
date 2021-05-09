<template>
<!-- 附近店铺页面 -->
    <div class="wrapper">
        <div class="search">
            <!-- 返回按钮 -->
            <div class="search__back iconfont" @click="handleBackclick">&#xe677;</div>
            <div class="search__content">
                <div class="search__content__icon iconfont">&#xe633;</div>
                <input class="search__content__input" placeholder="请输入商品名称搜索"/>
            </div>
        </div>
        <!-- 顶部店铺信息 -->
        <ShopInfo 
        :item= "data.item"
        :hideborder= "true"
        v-show="data.item.imgUrl"
        />
        <!-- 右侧商品列表 -->
        <Content :shopName= "data.item.name"/>
        <!-- 底部购物车组件 -->
        <Cart />
    </div>
</template>

<script>
import { reactive } from 'vue';
import { useRouter, useRoute } from "vue-router"
import { get } from '../../utils/request'
import ShopInfo  from '../../components/ShopInfo'
import Content from './Content'
import Cart from './Cart'

// 获取当前商铺信息
const useShopInfoEffect = () => {
    const route = useRoute();
    const data = reactive({ item: {} });
    const getItemData = async () => {
        const result = await get(`/api/shop/${route.params.id}`)
        if(result?.errno === 0 && result?.data){
            data.item = result.data;
        }
    }
    return { data, getItemData }
}
 const useBackEffect = () => {
    const router = useRouter();
    const handleBackclick = () => {
        router.back();
    }
    return handleBackclick
 }
export default {
    name :'Shop',
    components: { ShopInfo, Content, Cart },
    setup() {
        const { data, getItemData } = useShopInfoEffect();
        const handleBackclick =useBackEffect();
        getItemData();
        return { data, handleBackclick }
    },

}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper{
    padding: 0 .18rem;
}
.search{
    display: flex;
    margin: .14rem 0 .04rem 0;
    &__back{
        line-height: .32rem;
        font-size: .2rem;
        padding: .03rem .16rem 0 0;
        color: #B6B6B6;
    }
    &__content{
        display: flex;
        flex: 1;
        line-height: .32rem;
        border-radius: .16rem;
        background: $search-bgColor;
        &__icon{
            width: .16rem;
            height: .16rem;
            padding: .03rem .16rem 0;
            color: $search-fontbgColor;
        }
        &__input{
            flex: 1;
            padding-right: .2rem;
            height: .32rem;
            outline: none;
            border: none;
            background: none;
            font-size: .14rem;
            color: $content-fontcolor;
            line-height: .32rem;
        }
    }
}
</style>
 
