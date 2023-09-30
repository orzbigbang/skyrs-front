<template>
	<div class="title">
        <span class="eng">{{ props.eng }}</span>
        <br>
        <span class="jpn">{{ props.jpn }}</span>
	</div>

	<div class="divider">
        <div class="first-block"></div>
        <div class="second-block"></div>
    </div>
</template>

<script setup>
const props = defineProps({
    eng: String,
    jpn: String,
})

</script>

<style scoped lang="css">
    .title {
        margin: 0 auto 15px;
        padding: 50px 0 0;
    }

    .eng {
        text-transform: uppercase;
        font-size: 2.5rem;
        margin-right: 20px;
        color: #000;
        font-family: serif;
    }

    .jpn {
        font-size: 1.5rem;
        font-weight: bold;
    }


    .divider {
        width: 100%;
        margin-bottom: 1rem;
        display: flex
    }
    .first-block {
        flex: 1;
        height: 4px;
        background-color: #000;
    }

    .second-block {
        flex: 5;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
    }
</style>
