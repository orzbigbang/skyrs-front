<template>
    <div class="wrapper bacc">
        <slot></slot>
    </div>
    <div class="divide-line bacc"></div>
</template>
    
<script setup>
    const props = defineProps(
        {
            tag: Object
        }
    )
</script>
    
<style scoped  lang='less'>
    .wrapper {
        min-width: 130px;
        max-width: 200px;
        height: 50px;
        line-height: 50px;
        margin-top: 20px;
        text-align: center;
        font-size: 18px;
        color: #fff;
    }

    .divide-line {
        width: 100%;
        height: 2px;
        margin-bottom: 20px;
    }

	@media screen and (max-width:991.98px) {
        .wrapper {
            max-width: 120px;
            height: 40px;
            line-height: 40px;
            font-size: 1rem;
        }
	}
</style>