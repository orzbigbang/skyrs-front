<template>
    <div id="goTop" class="wrapper" @click="go2top">
        <span class="top fc">TOPへ</span>
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
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        right: 5%;
        bottom: 120px;
        cursor: pointer;
        transition: .1s;

        &:hover {
            background-color: rgba(96, 160, 234, 1);
        }

        &:hover .top {
            color: rgba(96, 160, 234, 1);
        }

        .top {
            width: 100px;
            font-weight: bold;  
            position: absolute;
            left: 0;
            top: -50%;
        }

        .go-top {
            font-size: 18px;
            color: #fff;
        }
    }
</style>