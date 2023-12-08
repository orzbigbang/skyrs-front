<template>
    <span class="b1 b"></span>
    <span class="b2 b"></span>
    <span class="b3 b"></span>
</template>
    
<script setup>
    
</script>
    
<style scoped lang='less'>
    span {
        position: absolute;
        border-radius: 50%;
        z-index: 1;
    }
    span.b1 {
        width: 50px;
        height: 50px;
        background-color: rgb(253, 188, 67);
        left: 0;
        top: 0;
        animation: roaming ease-in-out 3s infinite alternate;
    }
    span.b2 {
        width: 20px;
        height: 20px;
        background-color: cyan;
        right: 0;
        top: 10px;
        animation: roaming ease-in-out 4s infinite alternate;
    }
    span.b3 {
        width: 30px;
        height: 30px;
        background-color: rgb(209, 88, 209);
        right: 25%;
        bottom: 0;
        animation: roaming ease-in-out 2.5s infinite alternate;
    }

    @keyframes roaming {
        0% {
            transform: translateY(0) scale(1.1);
        }
        60% {
            transform: translateY(-10px) scale(0.95);
        }
        100% {
            transform: translateY(-14px) scale(0.9);
        }
    }

    @media screen and (max-width:700px) {
        span.b1 {
            width: 38px;
            height: 38px;
        }
        span.b2 {
            width: 14px;
            height: 14px;
        }
        span.b3 {
            width: 20px;
            height: 20px;
        }
    }
</style>