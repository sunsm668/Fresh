<template>
<!-- 购物车页 -->
    <div class="wrapper">
        <div class="shopcart">
            <div class="shopcart__title">我的全部购物车（2）</div>
        </div>
        <div class="shopcart__list">
            <div class="shop__list__li">
                <div class="shopcart__li">
                    <div class="shopcart__li__title">沃尔玛</div>
                    <div class="shopcart__li__desc">
                        <img src="" alt="">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.shopcart{
    width: 3.75rem;
    height: .64rem;
    background: #FFFFFF;
    &__title{
        height: .22rem;
        color: $content-fontcolor;
        font-size: .16rem;
        text-align: center;
        padding: .31rem 0 0 .11rem;
    }
}
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