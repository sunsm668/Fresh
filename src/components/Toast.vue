<template>
    <!-- 弹窗组件 -->
    <div class="toast">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
    name: 'Toast',
    props: ['message']
}
export const useToastEffect = () => {
    //弹窗内容功能
    const toastData = reactive({
            show: false,                     //默认不显示
            toastMessage:''                  //显示内容默认为空
        })
    //弹窗显示功能
    const showToast= ( message ) => {
        console.log(message)
        toastData.show = true;               //显示状态至为true
        toastData.toastMessage = message;    //送入显示内容
        setTimeout(() => {                   //2秒弹出层消失，并恢复初始状态
            toastData.show = false;
            toastData.toastMessage = '';
        }, 2000);
    }
    const { show, toastMessage } = toRefs(toastData)
    return { show, toastMessage, showToast }
} 
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: .1rem;
    background-color: rgba(0,0,0,.35);
    color: $bgColor;
    border-radius: .05rem;
}
</style>