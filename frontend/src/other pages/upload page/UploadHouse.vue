<template>
    <div class="outer container">
        <div class="title">
            上传房屋
            <div class="description">把excel和图片打包成zip文件，再上传</div>
            <form>
                <input type="file" name="file" @change="handleFileChange($event)">
                <button class="upload" @click.prevent="uploadZipFile">Upload Zip</button>
            </form>
        </div>
        <div class="result">
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
</style>