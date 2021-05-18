<template>
<!-- 附件店铺组件 -->
    <div class="nearby">
      <h3 class="nearby__title">附近店铺</h3>
      <template
       v-for="item in nearbyList"
        :key="item._id"
      >
        <router-link  
        :to="`/shop/${item._id}`"     
        >
          <ShopInfo :item= "item"/>
        </router-link>
      </template>
    </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import  ShopInfo  from '../../components/ShopInfo'

const getNearbyListEffect = () => {
  const nearbyList = ref([]);
  const getNearbyList = async () => {
    // 获取附近店铺信息
    const result = await get('/api/shop/hot-list')
    if(result?.errno === 0 && result?.data?.length){
      nearbyList.value = result.data;
    }
  } 
  return { nearbyList, getNearbyList }
}
export default {
 name : 'Nearby',
 components: { ShopInfo },
 setup() {
   const { nearbyList, getNearbyList } = getNearbyListEffect()
   getNearbyList();
   return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.nearby {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  a{
    text-decoration: none;
  }
}
</style>