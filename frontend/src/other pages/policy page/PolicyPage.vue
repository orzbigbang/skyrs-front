<template>
    <div class="container">
        <div class="info-wrapper">
            <p v-html="policy[infoType]"></p>
        </div>
    </div>
</template>
    
<script setup>
    import { ref, watch } from 'vue'
    import { useRoute } from 'vue-router'
    const route = useRoute()

    // 根据路由参数，获得相应的契约内容
    import {policy} from '@/assets/js/policy.js'

    const infoType = ref(1)

    watch(() => route.params, (newVal) => {
        infoType.value = newVal.policytype
    })
</script>
    
<style scoped  lang='less'>
    .container {
        background-color: #fff;
        min-height: 100vh;

        .info-wrapper {
            width: 100%;
            min-height: 100vh;
            padding: 50px;
            font-size: 16px;
            letter-spacing: 1px;
            box-shadow: 0 0 10px #ccc;
        }
    }

    @media screen and (max-width:700px) {
        .container {
            width: 100%;

            .info-wrapper {
                margin: 0 auto;
                border: none;
                box-shadow: none;

                &:hover {
                    box-shadow: none;
                }
            }
        }
    }
</style>