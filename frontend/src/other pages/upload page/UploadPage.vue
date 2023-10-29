<template>
    <nav>
        <router-link to="/upload/modify"><button>ホームページの修正</button></router-link>
        <router-link to="/upload/upload"><button>物件をアップロード</button></router-link>
    </nav>
    
    <router-view></router-view>
</template>

<script setup>
</script>

<style scoped lang="less">
    nav {
        width: 100%;
        height: 100px;
        line-height: 100px;
        background-color: #fff;
        box-shadow: 0 5px 10px #888;

        button {
            width: 150px;
            height: 30px;
            margin: 0 10px;
            font-size: 14px;
            font-family: Arial, "Microsoft YaHei", "Hiragino Sans GB", sans-serif;
        }
    }
</style>
