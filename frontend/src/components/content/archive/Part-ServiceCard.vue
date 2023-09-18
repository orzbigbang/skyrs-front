<template>
        <div class="wrapper">
            <div class="title">
                <span class="jpn">{{ props.card.title }}</span>
                <span class="eng">{{ props.card.eng }}</span>
            </div>
            <fa icon="angle-right" class="fa-icon"></fa>
        </div>
</template>
    
<script setup>
    const props = defineProps({
        card: Object
    })
</script>
    
<style scoped  lang='less'>
    .wrapper {
        width: 13rem;
        height: 5rem;
        border: 1px solid #000;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .jpn {
                font-size: 1.3rem;
                font-weight: bold;
            }

            .eng {
                color: #888;
            }
        }

        .fa-icon {
            position: absolute;
            right: 5%;
            top: 50%;
            transform: translateY(-50%);
        }
    }
</style>