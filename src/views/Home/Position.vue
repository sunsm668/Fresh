<template>
    <div class="position">
        <span class="iconfont position__icon">&#xe611;</span>
        北京理工大学国防科技园2号楼10层
        <span class="iconfont position_notice">&#xe64b;</span>
    </div> 
</template>

<script>
export default {
 name : 'Position'
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }
  .position_notice {
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
  color: $content-fontcolor;
}
</style>