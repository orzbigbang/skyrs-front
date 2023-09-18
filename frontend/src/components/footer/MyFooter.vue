<template>
    <div class="wrapper">
        <div class="url" v-for="url in urls" @click="url.func(url.param)">
            {{ url.title }}
        </div>
    </div>
</template>

<script setup>
    const urls = [
        {title:'個人情報保護・プライバシーポリシー', func:'', param:''},
        {title:'ポリシー２', func:'', param:''},
        {title:'ポリシー３', func:'', param:''},
        {title:'ポリシー４', func:'', param:''},
    ]
</script>

<style scoped lang="less">
    .wrapper {
        height: 100px;
        background-image: linear-gradient(to bottom, rgba(31, 78, 121, 0.3), rgb(31,78,121));
        color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .url {
            margin: 0 2rem;
            // font-weight: bold;
            border-bottom: 1px solid #fff0;
            cursor: pointer;
            transition: all .15s linear;

            &:hover {
                border-bottom: 1px solid #fff;

            }
        }
    }
</style>
