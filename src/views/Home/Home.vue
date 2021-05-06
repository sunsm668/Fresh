<template>
<!-- 首页 -->
    <div class="wrapper">
        <Position />
        <Search />
        <Banner />
        <List />
        <Nearby />
    </div>
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
