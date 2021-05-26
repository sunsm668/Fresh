<template>
    <div class="wrapper">
        <div class="top">
            <h2 class="top__icon iconfont" @click="handleBackClick">&#xe677;</h2>
            <h2 class="top__title">编辑收货地址</h2>
            <router-link to="newaddress">
                <div class="top__new"></div>
            </router-link>
        </div>
        <form action="/api/user/address/:id" method="patch">
            <div class="newaddressList">
                <div class="newaddressList__city">所在城市：
                    <input type="text" class="newaddressList__input" :value="address.city">
                </div>
                <div class="newaddressList__department">小区/大厦/学校：
                    <input type="text" class="newaddressList__input" :value="address.department">
                </div>
                <div class="newaddressList__houseNumber">楼号-门牌号：
                    <input type="text" class="newaddressList__input" :value="address.houseNumber">
                </div>
                <div class="newaddressList__name">收货人：
                    <input type="text" class="newaddressList__input" :value="address.name">
                </div>
                <div class="newaddressList__phone">联系电话：
                    <input type="text" class="newaddressList__input" :value="address.phone">
                </div>
                <input type="submit" class="newaddressList__submit" value="保存">
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'; 
import { get, patch } from '../../utils/request';
export default {
    name: 'Address',
    setup() {
        const route = useRoute();
        const router = useRouter();
        const id =route.params.id;
        const handleBackClick = () => {
            router.back();
        }
        const address = ref([]);
        const getaddress = async () => {
            // 获取地址
            const result = await get(`/api/user/address/${id}`);
            if(result?.errno === 0 && result?.data?.length){
                address.value = result.data;
            }
        } 
        getaddress();
        
        const upAddress = ref([]);
        const UpDataAddress = async () => {
            // 更新地址
            const result = await patch(`/api/user/address/${id}`);
            if(result?.errno === 0 && result?.data?.length){
               upAddress.value = result.data;
            }
        } 
        UpDataAddress();
        return {
            handleBackClick, UpDataAddress, address, upAddress
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