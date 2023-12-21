<template>
    <div class="kv-wrapper">
        <div class="key">{{ base._key }}</div>
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
        display: flex;
        flex-direction: row;
        justify-content: flex-start !important;
        align-items: flex-start;
        letter-spacing: 1px;
        flex-wrap: nowrap !important;
        font-size: 1rem;

        .key {
            width: 200px;
            margin-right: 20px;
            color: #666;
            flex-shrink: 0;
        }

        .value {
        }
    }

    @media screen and (max-width:700px) {
        .kv-wrapper {

            .key {
                width: 100px;
                margin-right: 10px;
            }
        }
    }
</style>
