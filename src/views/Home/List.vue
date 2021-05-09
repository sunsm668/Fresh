<template>
<!-- 导航列表组件 -->
    <div class="icons">
        <div class="icons__item"
        v-for="item in List"
        :key="item.desc">
          <img
            class="icons__item__img"
            :src="item.imgURL"
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
   const List = [
     {
       imgURL :'http://www.dell-lee.com/imgs/vue3/超市.png',
       desc :'超市便利'
     },
     {
       imgURL :'http://www.dell-lee.com/imgs/vue3/菜市场.png',
       desc :'菜市场'
     },
     {
       imgURL :'http://www.dell-lee.com/imgs/vue3/水果店.png',
       desc :'水果店'
     },
     {
       imgURL :'http://www.dell-lee.com/imgs/vue3/鲜花.png',
       desc :'鲜花绿植'
     },
     {
       imgURL :'http://www.dell-lee.com/imgs/vue3/医药健康.png',
       desc :'医药健康'
     },
     {
       imgURL :'http://www.dell-lee.com/imgs/vue3/家居.png',
       desc :'家居时尚'
     },
     {
       imgURL :'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
       desc :'烘培蛋糕'
     },
     {
       imgURL :'http://www.dell-lee.com/imgs/vue3/超市.png',
       desc :'超市便利'
     },
     {
       imgURL :'http://www.dell-lee.com/imgs/vue3/超市.png',
       desc :'超市便利'
     },
     {
       imgURL :'http://www.dell-lee.com/imgs/vue3/超市.png',
       desc :'超市便利'
     },
   ]
   return { List }
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