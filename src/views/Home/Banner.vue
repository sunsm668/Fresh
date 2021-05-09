<template>
<!-- 轮播图组件 -->
   <div class="banner">
        <img
          class="banner__img"
          src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
        />
    </div>  
</template>

<script>
export default {
 name : 'Banner'
}
</script>

<style lang="scss" scoped>
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
</style>