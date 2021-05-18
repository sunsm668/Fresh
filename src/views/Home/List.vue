<template>
<!-- 导航列表组件 -->
    <div class="icons">
        <div class="icons__item"
        v-for="item in iconsList"
        :key="item.desc">
          <img
            class="icons__item__img"
            :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
          />
          <p class="icons__item__desc">{{ item.desc }}</p>
        </div>
      </div>
      <div class="gap"></div> 
</template>

<script>
export default {
 name : 'List',
 setup() {
    const iconsList = [
      { imgName: "超市", desc: "超市便利"},
      { imgName: "菜市场", desc: "菜市场"},
      { imgName: "水果店", desc: "水果店"},
      { imgName: "鲜花", desc: "鲜花绿植"},
      { imgName: "医药健康", desc: "医药健康"},
      { imgName: "家居", desc: "家居时尚"},
      { imgName: "蛋糕", desc: "烘培蛋糕"},
      { imgName: "签到", desc: "签到"},
      { imgName: "大牌免运", desc: "大牌免运"},
      { imgName: "红包", desc: "红包套餐"},
    ]
    return { iconsList }
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