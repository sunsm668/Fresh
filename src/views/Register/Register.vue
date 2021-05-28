<template>
<!-- 注册页 -->
    <div class="wrapper">
        <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" class="wrapper__img">
        <div class="wrapper__input">
            <input type="text" 
            class="wrapper__input__content" 
            placeholder="请输入用户名"
            v-model="username"
            >
        </div>
        <div class="wrapper__input">
            <input type="password" 
            class="wrapper__input__content" 
            placeholder="请输入密码"
            v-model="password"
            >
        </div>
        <div class="wrapper__input">
            <input type="password" 
            class="wrapper__input__content" 
            placeholder="确认密码"
            v-model="ensurement"
            >
        </div>
        <div class="wrapper__register-button" @click="handleRegister">注册</div>
        <div class="wrapper__register-link"  @click="handleLogin">已有账号去登陆</div>
        <Toast v-if="show" :message="toastMessage"/>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { reactive, toRefs } from 'vue';
import { post } from '../../utils/request';
import Toast , { useToastEffect }from '../../components/Toast.vue';

const useRegisterEffect = (  showToast ) => {
    const router = useRouter();
    const data = reactive({
        username:'',
        password:'',
        ensurement:''
    })

    const handleRegister = async () => {
        try{
            // 存入用户名，用户密码
            const result = await post('/api/user/register',{
                username: data.username,
                password: data.password
            })
            // if(result.data.errno === 0){
            if(result.data.error === 0){
                router.push({ name : 'Login'})
            }else{
                showToast('注册失败');
            }
        }catch(e){
                showToast('请求失败');
        }
    } 
    const { username,  password, ensurement } = toRefs(data);
    return { username,  password, ensurement, handleRegister }
}
export default {
    name :'Register',
    components:{ Toast },
    setup() {
    const router = useRouter();
    const {  show, toastMessage, showToast  } = useToastEffect();
    const { username,  password, ensurement, handleRegister } = useRegisterEffect(showToast)
    const handleLogin = () => {
        router.push({ name : 'Login'})
    }
    return { 
        username,  password, ensurement,
        handleRegister, handleLogin,
        show, toastMessage, 

        }
    },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper{
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    &__img{
        display: block;
        width: .66rem;
        height: .66rem;
        margin: 0 auto .4rem auto;
    }
    &__input{
        height: .48rem;
        padding: 0 .16rem;
        margin: 0 .4rem .16rem .4rem;
        background: #F9F9F9;
        border: .01rem solid rgba(0,0,0,0.10);
        border-radius: .06rem;
        &__content{
            width: 100%;
            line-height: .48rem;
            font-size: .16rem;
            color: rgba(0,0,0,0.50);
            outline: none;
            background: none;
            border: none;
        }
    }
    &__register-button{
        height: .48rem;
        background: #0091FF;
        margin: .32rem .4rem .16rem .4rem;
        box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
        border-radius: .04rem;
        font-size: .16rem;
        line-height: .48rem;
        color: $bgColor;
        text-align: center;
    }
    &__register-link{
        font-size: .14rem;
        color: rgba(0,0,0,0.50);
        text-align: center;
    }
}
</style>