<template>
    <div class="kv-wrapper">
        <div class="key">{{ props.base._key }}</div>
        <div class="value">{{ _value }}</div>
    </div>
</template>
    
<script setup>
    import { computed } from 'vue'
    const props = defineProps({
        base: Object
    })

    const _value = computed(() => {
        let result = ""
        for (let value in props.base._value) {
            if (result === "") {
                result = props.base._value[value]
            } else {
                result += " / " + props.base._value[value]
            }
        }
        return result
    })
</script>
    
<style scoped lang='less'>
    .kv-wrapper {
        margin: 0 0 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        letter-spacing: 1px;
        flex-wrap: nowrap !important;

        .key {
            width: 200px;
            margin-right: 20px;
            font-size: 15px;
            color: #666;
            flex-shrink: 0;
        }

        .value {
            font-size: 16px;
        }
    }
</style>
