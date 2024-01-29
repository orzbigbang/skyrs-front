<template>
    <div class="container">
        <div class="outer">
            <h3 class="title block">①バッジ登録</h3>
            <button class="block" @click="downloadExcel">Execlフォーマットをダウンロード</button>
            <p class="description block">Excelと画像（imgフォルダーにまとめる）をZIPファイルにしてアップロード</p>
            <form class="block">
                <input type="file" name="file" @change="handleFileChange($event)">
                <button class="upload block" @click.prevent="uploadZipFile">Upload Start</button>
            </form>
            <div class="result block">
                <span v-if="startUpload">uploading...</span>
                <span>{{ uploadStatus }}</span>
            </div>
        </div>

        <div class="outer">
            <h3 class="title block">②ウェブページで入力</h3>
            <button class="block" @click="goCreate">登録ページへ移動</button>

        </div>
    </div>
</template>
    
<script setup>
    import { uploadZip } from "@/composition/upload.js"

    import { ref } from 'vue'

    const uploadStatus = ref("")
    const startUpload = ref(false)

    let zipFile
    const handleFileChange = ($event) => {
        zipFile = $event.target.files[0]
    }

    const uploadZipFile = () => {
        uploadStatus.value = uploadZip(zipFile)
    }

    import { useRouter } from "vue-router";
    const router = useRouter()

    const goCreate = () => {
        router.push(`/housecreate`)
    }

</script>
    
<style scoped  lang='less'>
    .title {
        font-weight: bold;
        font-size: 18px;
        margin-right: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    button {
        width: 250px;
        height: 30px;
    }

    .outer {
        margin: 20px auto;
        padding: 10px 20px;
        border: 1px dotted #666;
    }

    .block {
        margin-top: 20px;
    }
</style>