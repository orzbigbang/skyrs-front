<template>
    <div class="elevator">
        <ul class="wrapper">
            <slot></slot>
        </ul>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .elevator {
        width: 3rem;
        display: inline-block;
    }

    .elevator .wrapper {
        width: 3rem;
        opacity: .8;
        position: fixed;
        bottom: 2rem;
        right: 3%;
    }

    :slotted(.elevator .wrapper li) {
        background-color: rgb(49, 45, 53);
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        font-size: .8rem;
        color: #eee;
        border: 1px solid #eee;
        border-radius: 1rem;
        cursor: pointer;
        box-shadow: inset 2px 2px 0 2px #999, inset -2px -2px 0 2px #bbb;
        transition: all .1s linear;
    }

    :slotted(.elevator .wrapper li:hover) {
        transform: rotateZ(1turn);
        box-shadow: inset 2px 2px 0 2px rgb(158, 103, 103), inset -2px -2px 0 2px rgb(152, 110, 159);
    }
</style>