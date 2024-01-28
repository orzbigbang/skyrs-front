<template>
    <div>
        <UploadBlock :block="blocks[0]">
            <form action="#">
                <input class="input title" type="text" placeholder="请输入要修改成的title">
                <textarea rows="8" cols="50" placeholder="请输入要修改成的文字说明"></textarea>
                <input class="input" type="text" placeholder="请输入要修改成的底部小字">
                <button class="upload">Submit</button>
            </form>
        </UploadBlock>
        <UploadBlock :block="blocks[1]">
            <form action="#">
                <input class="input title" type="text" placeholder="请输入要修改成的title">
                <textarea rows="8" cols="50" placeholder="请输入要修改成的文字说明"></textarea>
                <div class="wrapper">
                    <input class="input" type="text" placeholder="请输入推荐图片1的id">
                    <input class="input" type="text" placeholder="请输入推荐图片2的id">
                    <input class="input" type="text" placeholder="请输入推荐图片3的id">
                </div>
                <button class="upload">Submit</button>
            </form>
        </UploadBlock>
        <UploadBlock :block="blocks[2]">
        
        </UploadBlock>
        <UploadBlock :block="blocks[3]">
            <button class="upload">Upload Zip</button>
        </UploadBlock>

        <UploadBlock :block="blocks[4]">
            <button class="upload">Submit</button>
        </UploadBlock>
    </div>
</template>
    
<script setup>
    import UploadBlock from './UploadBlock.vue';

    const blocks = [
        {
            title: "修改大图上信息",
            description: "",
            func: ""
        },
        {
            title: "修改推荐物件，说明文字",
            description: "",
            func: ""
        },
        {
            title: "新房展示： 无修改内容",
            description: "",
            func: ""
        },
        {
            title: "修改轮播图",
            description: "把图片打包成zip上传",
            func: ""
        },
        {
            title: "修改底部链接",
            description: "",
            func: ""
        },
    ]
    
</script>
    
<style scoped  lang='less'>
    
</style>