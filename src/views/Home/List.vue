<template>
<!-- 导航列表组件 -->
    <div class="icons">
        <div class="icons__item"
        v-for="item in list.data"
        :key="item.id">
          <img
            class="icons__item__img"
            :src="item.imgUrl"
          />
          <p class="icons__item__desc">{{item.name}}</p>
        </div>
      </div>
      <div class="gap"></div> 
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
 name : 'List',
 setup() {
  const list = ref([]);
  axios.get('https://www.fastmock.site/mock/1c368cc0e5be9d69bcb83f64a2c1a09c/jd/api/list', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    list.value = response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
    return { list };
  } 
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item {
    width: 20%;
    &__img {
      display:block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgColor;
}
</style>