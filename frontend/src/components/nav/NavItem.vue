<template>
    <li class="wrapper">
        <div class="nav-item">
            {{ item.title }}
        </div>
        <Transition>
            <ul class="sub-item-wrapper" v-show="index === activeIndex">
                <NavSubItem 
                    v-for="item in item.subItem" 
                    :subItem="item" 
                    @on-touch="emits('on-touch')">
                </NavSubItem>
            </ul>
        </Transition>
    </li>
</template>
    
<script setup>
    import NavSubItem from '@/components/nav/NavSubItem.vue'

    const props = defineProps(
        {
            item: Object,
            index: Number,
            activeIndex: Number
        }
    )

    const emits = defineEmits(["on-touch"])
</script>
    
<style lang="less">
    .wrapper {
        position: relative;

        .nav-item {
            width: 11rem;
            height: 100%;
            font-size: 20px;
            font-weight: bold;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: all .1s linear;

            &:hover {
                font-weight: bold;
                color: rgb(16, 3, 57);
            }
        }   

        .sub-item-wrapper {
            width: 17rem;
            background-color: #fff;
            border: 1px solid #999;
            box-shadow: 0 1px 5px #999;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
            position: absolute;
            top: 90%;
            font-size: 16px;
            border-radius: 10px;
            z-index: 100;
        }
    }

    @media screen and (max-width:700px) {
        .wrapper {
            .nav-item {
                width: 9rem;
                font-size: 17px;
            }   
        }
    }

    .v-enter-active,
    .v-leave-active {
        transition: opacity .2s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
</style>