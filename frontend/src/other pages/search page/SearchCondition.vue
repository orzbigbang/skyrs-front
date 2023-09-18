<template>
    <div class="condition-wrapper">
        <span class="attr">{{ props.condition.title }}:</span>
        <slot></slot>
    </div>

</template>
    
<script setup>
    const props = defineProps(
        {
            condition: Object
        }
    )
</script>
    
<style scoped lang='less'>
    .condition-wrapper {
        margin: 15px 15px 15px 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        .attr {
            width: 100px;
            color: #666;
            margin-right: 5px;
        }
    }
</style>