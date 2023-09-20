<template>
    <div class="kv-wrapper">
        <div class="key">{{ props.highlight._key }}</div>
        <div class="value">
            <!-- <div class="normal">{{ props.normal }}</div> -->
            <div class="highlight1 fc">{{ highlight1 }}</div>
            <div class="highlight2">{{ highlight2? '/' + highlight2: '' }}</div>
        </div>
    </div>
</template>
    
<script setup>
    import { computed } from 'vue'
    const props = defineProps({
        highlight: Object,
    })

    const highlight1 = computed(() => {
        return Object.values(props.highlight._value)[0]
    })

    const highlight2 = computed(() => {
        return Object.values(props.highlight._value)[1]
    })
    
</script>
    
<style scoped  lang='less'>
    .kv-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-right: 100px;


        .key {
            width: 150px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 16px;
            margin: 10px 0;
            background-color: rgb(242, 208, 215);
        }

        .value {
            width: 300px;
            height: 50px;
            font-size: 16px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            letter-spacing: 1px;

            .highlight1 {
                font-size: 20px;
                font-weight: bold;
            }
        }
    }
</style>