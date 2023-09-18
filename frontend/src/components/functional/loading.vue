<template>
    <section>
        <div class="loading">
            <span style="--i:1;"></span>
            <span style="--i:2;"></span>
            <span style="--i:3;"></span>
            <span style="--i:4;"></span>
            <span style="--i:5;"></span>
            <span style="--i:6;"></span>
            <span style="--i:7;"></span>
            <span style="--i:8;"></span>
            <span style="--i:9;"></span>
            <span style="--i:10;"></span>
            <span style="--i:11;"></span>
            <span style="--i:12;"></span>
            <span style="--i:13;"></span>
            <span style="--i:14;"></span>
            <span style="--i:15;"></span>
            <span style="--i:16;"></span>
            <span style="--i:17;"></span>
            <span style="--i:18;"></span>
            <span style="--i:19;"></span>
            <span style="--i:20;"></span>
        </div>
    </section>
</template>

<script setup>
</script>

<style lang="css" scoped>
    section {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #eee;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;
    }

    .loading {
        position: relative;
        width: 8rem;
        height: 8rem;
    }

    section .loading span {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transform: rotate(calc(18deg * var(--i))); 
    }

    section .loading span::before {
        content: '';
        width: 1rem;
        height: 1rem;
        border-radius: .5rem;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #999;
        animation: breath 0.6s linear infinite;
        animation-delay: calc(0.06s * var(--i));
    }

    @keyframes breath {
        0% {
            transform: scale(1)
        }
        80%, 100% {
            transform: scale(0)
        }
    }
</style>