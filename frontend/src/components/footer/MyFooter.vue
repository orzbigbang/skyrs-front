<template>
    <div class="wrapper">
        <div class="url" v-for="url in urls" @click="url.func(url.type_)">
            {{ url.title }}
        </div>
    </div>
</template>

<script setup>
    import {useRouter} from 'vue-router'
    const router = useRouter()
    
    const footerFunc = (type) => {
        router.push(`/policy/${type}`)
    }

    const urls = [
        {title:'個人情報保護方針（プライバシーポリシー）', func:footerFunc, type_:'1'},
        {title:'特定個人情報保護方針', func:footerFunc, type_:'2'},
    ]
</script>

<style scoped lang="less">
    .wrapper {
        height: 100px;
        background-color: rgb(31,78,121);
        color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        z-index: 100000;

        .url {
            margin: 0 2rem;
            border-bottom: 1px solid #fff0;
            text-align: center;
            cursor: pointer;
            transition: all .15s linear;

            &:hover {
                border-bottom: 1px solid #fff;

            }
        }
    }
</style>
