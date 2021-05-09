<template>
<!-- 搜索组件 -->
    <div class="search">
        <span class="iconfont">&#xe62d;</span>
        <span class="search__text">山姆会员商店优惠商品</span>
    </div>   
</template>

<script>
export default {
 name : 'Search'
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.search {
  margin-bottom: .12rem;
  line-height: .32rem;
  background: $search-bgColor;
  color: $search-fontbgColor;
  border-radius: .16rem;
  .iconfont {
    display: inline-block;
    padding: 0 .08rem 0 .16rem;
    font-size: .16rem;
  }
  &__text {
    display: inline-block;
    font-size: .14rem;
  }
}

</style>