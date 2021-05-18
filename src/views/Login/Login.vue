<template>
<!-- 登陆页 -->
    <div class="wrapper">
        <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" class="wrapper__img">
        <div class="wrapper__input">
            <input type="text" class="wrapper__input__content" placeholder="请输入用户名" v-model="username">
        </div>
        <div class="wrapper__input">
            <input type="password" class="wrapper__input__content" placeholder="请输入密码" v-model="password">
        </div>
        <div class="wrapper__login-button" @click="handleLogin">登陆</div>
        <div class="wrapper__login-link" @click="handleRegisterClick">立即注册</div>
        <Toast v-if="show" :message="toastMessage"/>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { post } from '../../utils/request';
import Toast , { useToastEffect }from '../../components/Toast.vue';

const useLoginEffect = (  showToast ) => {
    const router = useRouter();
    const data = reactive({
        username:'',
        password:'',
    })
    const handleLogin = async () => {
    try{
        const result = await post('/api/user/login',{
            username: data.username,
            password: data.password
        })
        if(result.data.errno=== 0){
            showToast('登陆成功');
            localStorage.isLogin = true;
            router.push({ name : 'Home'})
        }else{
            showToast('登陆失败');
        }
    } catch (e){
            showToast('请求失败');
        }
    } 
    const { username,  password } = toRefs(data);
    return { username,  password, handleLogin }
}
const useRegisterEffect = () => {
    const router = useRouter();
    const handleRegisterClick = () => {
        router.push({ name : 'Register'})
    }
    return {  handleRegisterClick }
}



export default {
    name :'Login',
    components: { Toast },
    setup() {
        const {  show, toastMessage, showToast  } = useToastEffect();
        const { username,  password, handleLogin } = useLoginEffect(showToast);  
        const {  handleRegisterClick } = useRegisterEffect();  
        return { 
            username,  password, handleLogin,
            show, toastMessage,
            handleRegisterClick
        }
    },
}
</script>

<style lang="scss" scoped>
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
    &__login-button{
        height: .48rem;
        background: #0091FF;
        margin: .32rem .4rem .16rem .4rem;
        box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
        border-radius: .04rem;
        font-size: .16rem;
        line-height: .48rem;
        color: #FFFFFF;
        text-align: center;
    }
    &__login-link{
        font-size: .14rem;
        color: rgba(0,0,0,0.50);
        text-align: center;
    }
}
</style>