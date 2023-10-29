<template>
    <div id="goTop" class="wrapper" @click="go2top">
        <fa class="go-top" icon="angles-up"/>
    </div>
</template>
    
<script setup>

    const getPosition = ($event) => {
        
    }

    window.addEventListener("scroll", ($event) => {
    })

    const go2top = () => {
        document.body.scrollTo(0, 0);
    }
</script>
    
<style scoped  lang='less'>
    .wrapper {
        width: 40px;
        height: 40px;
        background-color: rgba(96, 160, 234, .6);
        border: 1px solid #ccc;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        right: 5%;
        bottom: 12%;
        cursor: pointer;
        transition: .1s;

        &:hover {
            background-color: rgba(96, 160, 234, 1);

        }

        .go-top {
            font-size: 18px;
            color: #fff;
        }
    }
</style>