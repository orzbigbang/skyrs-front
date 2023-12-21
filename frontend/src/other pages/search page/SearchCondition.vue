<template>
    <div class="condition-wrapper">
        <span class="title">{{ condition.title }}:</span>
        <div class="values">
            <slot></slot>
        </div>
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

        .title {
            width: 100px;
            color: #666;
            margin-right: 15px;
        }

        .values {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
        }
    }

    @media screen and (max-width:991.98px) {
        .condition-wrapper {
            .title {
                min-width: 60px;
                max-width: 60px;
            }
        }
	}
</style>