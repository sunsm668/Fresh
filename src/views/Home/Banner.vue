<template>
<!-- 轮播图组件 -->
   <div class="banner">
        <img
          class="banner__img"
          src="https://wx2.sinaimg.cn/mw690/006CXO6ily1gu95vao1fyj60v90cin0v02.jpg"
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
  height: .38rem;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
    height: 1.2rem;
  }
}
</style>