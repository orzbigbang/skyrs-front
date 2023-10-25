<template>
    <div class="container">
        <div class="info-wrapper">
            <p v-html="type_[infoType]"></p>
        </div>
    </div>
</template>
    
<script setup>
    import { ref, watch } from 'vue'
    import { useRoute } from 'vue-router'
    const route = useRoute()

    const infoType = ref(1)

    watch(() => route.params, (newVal) => {
        infoType.value = newVal.infoType
    })

    // 根据路由参数，获得相应的契约内容
    import type_ from '@/assets/js/policy.js'
</script>
    
<style scoped  lang='less'>
    .container {
        min-height: 100vh;

        .info-wrapper {
            width: 100%;
            min-height: 100vh;
            padding: 20px;
            font-size: 16px;
            letter-spacing: 1px;
            background-color: #fff;
            box-shadow: 0 0 10px #999;
        }
    }
</style>