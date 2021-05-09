<template>
<!-- 首页 -->
    <div class="wrapper">
        <!-- 位置信息组件 -->
        <Position />
        <!-- 搜索组件 -->
        <Search />
        <!-- 轮播图组件 -->
        <Banner />
        <!-- 导航列表组件 -->
        <List />
        <!-- 附件店铺组件 -->
        <Nearby />
    </div>
    <!-- 底部Tab栏 -->
    <Docker />
</template>

<script>
import Position from './Position'
import Search from './Search'
import Banner from './Banner'
import List from './List'
import Nearby from './Nearby'
import Docker from './Docker'
export default {
    name : 'Home',
    components: { 
        Nearby,
        List,
        Banner,
        Docker,
        Search,
        Position
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .1rem .18rem;
}
</style>
