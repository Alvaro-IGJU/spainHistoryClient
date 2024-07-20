<template>
    <div class="profileContainer">
        <div class="profileColumn">
            <img src="https://media.licdn.com/dms/image/D4D03AQGJnk9LfFK1IQ/profile-displayphoto-shrink_200_200/0/1668372746187?e=2147483647&v=beta&t=WrWs5bCbbhuuZP9tItYn8R26s2O1B8fGDGSpoI5l6nw" alt="">
            <span class="changePhoto">Cambiar foto de perfil</span>
        </div>
        <div class="articlesColumn"></div>
    </div>
    
</template>
<script>
export default {
    name: 'profile-user'
}
</script>
<style>
    .profileContainer{
        width: 100%;
        display: flex;
        height: fit-content;
    }
    .profileColumn{
        width: 25%;
        background-color: #a3151a;
        color: white;
    }
    .profileColumn img{
        width: 100%;
        border: 1px solid #a3151a;
    }

    .changePhoto{
        margin: 5%;
    }
    .articlesColumn{
        width: 75%;
       
    }
</style>