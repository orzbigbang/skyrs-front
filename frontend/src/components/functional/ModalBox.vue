<template>
    <div class="mask" @click="closeModalSelectionX($event)">
        <div class="wrapper">
            <div class="title">
                {{ props.title }}
                <fa class="close" icon="xmark" @click="closeModalSelection"/>
            </div>

            <div class="slot">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
    
<script setup>
    import { useModalStore } from '@/stores/modal.js'
    const modalStore = useModalStore()

    const props = defineProps(
        {
            title: String
        }
    )

    const closeModalSelection = () => {
        modalStore.closeModalSelection()
    }

    const closeModalSelectionX = ($event) => {
        if ($event.target.className === "mask") {
            modalStore.closeModalSelection()
        }
    }
</script>
    
<style scoped  lang='less'>
    .mask {
        width: 100vw;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        background-color: #3338;
        z-index: 10000;

        .wrapper {
            width: 60rem;
            height: 70vh;
            padding-bottom: 20px;
            background-color: #fff;
            border-radius: 20px;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            .title {
                margin-bottom: 10px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                font-weight: 700;
                font-size: 20px;
                background-color: rgb(163, 206, 247);
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                color: rgb(31, 78, 122);
                position: relative;

                .close {
                    width: 30px;
                    height: 30px;
                    position: absolute;
                    right: 2%;
                    top: 50%;
                    transform: translateY(-50%);
                    border: 2px solid #fff;
                    color: #fff;
                    border-radius: 50%;
                    cursor: pointer;
                }
            }

            .slot {
                height: calc(100% - 58px);
                overflow-y: scroll;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    }
</style>