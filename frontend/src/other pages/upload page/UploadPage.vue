<template>
    <nav>
        <router-link to="/upload/upload"><button>修改主页</button></router-link>
        <router-link to="/upload/modify"><button>上传房屋</button></router-link>
        <button @click="downloadExcel">下载房屋上传模板</button>
    </nav>
    
    <router-view></router-view>
</template>

<script setup>
    // 下载文件
    const downloadExcel = () => {

    }

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
