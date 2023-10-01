<template>
    <div class="kv">
        <div class="key">{{ props.highlight._key }}</div>
        <div class="value">
            <!-- <div class="normal">{{ props.normal }}</div> -->
            <span class="highlight1 fc">{{ highlight1 }}</span>
            <span class="highlight2">{{ highlight2? '/' + highlight2: '' }}</span>
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
    
<style scoped lang='less'>
    .kv {
        margin-top: .8rem;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        font-size: 1rem;
    }
    .key {
        width: 9rem;
        height: 3rem;
        line-height: 3rem;
        margin-right: 1.3rem;
        text-align: center;
        background-color: rgb(242, 208, 215);
    }

    .value {
        width: 16rem;
        height: 3rem;
        line-height: 3rem;
        display: flex;
        letter-spacing: 1px;

        .highlight1 {
            font-size: 1.2rem;
            font-weight: bold;
        }
    }
</style>