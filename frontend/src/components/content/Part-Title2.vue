<template>
	<div class="title">
        <span class="eng">{{ eng }}</span>
        <!-- <br> -->
        <span class="jpn">{{ jpn }}</span>
	</div>

	<div class="divider">
        <div class="first-block"></div>
    </div>
</template>

<script setup>
const props = defineProps({
    eng: String,
    jpn: String,
})

const { eng, jpn } = props

</script>

<style scoped lang="css">
    .title {
        margin: 0 auto 15px;
        padding: 50px 0 0;
        font-family: 'Noto Serif JP', sans-serif;
    }

    .eng {
        text-transform: uppercase;
        font-size: 1.5rem;
        margin-right: 20px;
        color: #000;
        font-family: serif;
    }

    .jpn {
        font-size: 1.2rem;
        font-weight: bold;
    }


    .divider {
        width: 100%;
        margin-bottom: 1rem;
        display: flex
    }
    .first-block {
        flex: 1;
        height: 1px;
        background-color: #000;
    }
</style>
