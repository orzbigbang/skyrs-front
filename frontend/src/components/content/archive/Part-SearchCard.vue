<template>
        <div class="wrapper">
            <div class="icon">
                <fa :icon="props.icon"/>
            </div>
            <span class="title">{{ props.title }}</span>
        </div>
</template> 
    
<script setup>


    const props = defineProps({
        title: String,
        icon: String,
    })
</script>

<style scoped  lang='less'>
    .wrapper {
        width: 16rem;
        height: 8rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #000;
    }
</style>