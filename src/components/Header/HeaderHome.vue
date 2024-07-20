<!-- HeaderHome.vue -->
<template>
    <header id="headerHome">
        <div></div>
        <div class="titleHeader"><h1>Historia de España</h1></div>
        <div v-show="isAuthenticated" class="userProfileBtnContainer">
            <HeaderUserProfileBtn></HeaderUserProfileBtn>
        </div>
        <div class="buttonsHeader" v-show="!isAuthenticated">
            <HeaderRegisterBtn @register="handleRegister"></HeaderRegisterBtn>
            <HeaderLoginBtn @login="handleLogin"></HeaderLoginBtn>
        </div>
    </header>
</template>

<script>
import HeaderRegisterBtn from "./HeaderRegisterBtn.vue";
import HeaderLoginBtn from "./HeaderLoginBtn.vue";
import HeaderUserProfileBtn from "./HeaderUserProfileBtn.vue";

export default {
    name: 'header-home',
    components: {
        HeaderRegisterBtn,
        HeaderLoginBtn,
        HeaderUserProfileBtn
    },
    props: {
    isAuthenticated: {
      type: Boolean,
      default: false
        }
    }
    ,mount(){
    },
    methods: {
        handleLogin(login) {
            this.$emit('login', login); 
        },
        handleRegister(register) {
            this.$emit('register', register); 
        }
    }
}
</script>

<style scoped>
#headerHome {
    height: 12vh;
    border-bottom: 10px solid #a3151a;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

#headerHome h1 {
    font-family: 'Cinzel', serif;
}

#headerHome > div {
    width: 32%;
    height: 100%;
    display: flex;
    align-items: center;
}

.titleHeader {
    justify-content: center;
}

.buttonsHeader,.userProfileBtnContainer{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}


</style>
