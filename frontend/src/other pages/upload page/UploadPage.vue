<template>
    <nav>
        <button>上传房屋</button>
        <button>下载房屋上传模板</button>
        <button>修改主页</button>
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
    }
</style>
