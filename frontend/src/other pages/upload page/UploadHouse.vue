<template>
    <div class="outer container">
        <h3 class="title block">物件情報のアップロード</h3>
        <p class="description block">Excelと画像（imgフォルダーにまとめる）をZIPファイルにしてアップロード</p>
        <button class="block" @click="downloadExcel">Execlフォーマットをダウンロード</button>
        <form class="block">
            <input type="file" name="file" @change="handleFileChange($event)">
            <button class="upload block" @click.prevent="uploadZipFile">Upload Start</button>
        </form>
        <div class="result block">
            <span v-if="startUpload">uploading...</span>
            <span>{{ uploadStatus }}</span>
        </div>
    </div>
</template>
    
<script setup>
    import { uploadZip } from "@/composition/upload.js"

    import { ref, inject } from 'vue'

    const uploadStatus = ref("")
    const startUpload = ref(false)

    const apiURL = inject('apiURL')
    const url = apiURL.upload

    let zipFile
    const handleFileChange = ($event) => {
        zipFile = $event.target.files[0]
    }

    const uploadZipFile = () => {
        uploadStatus.value = uploadZip(zipFile, url)
    }
</script>
    
<style scoped  lang='less'>
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    button {
        width: 250px;
        height: 30px;
    }

    .block {
        margin-top: 20px;
    }
</style>