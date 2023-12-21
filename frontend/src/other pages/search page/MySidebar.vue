<template>
    <Teleport to="#nav">
        <div class="sidebar" :class="{show: isShow}">
            <!-- <div class="block">
                前回の検索条件
            </div>

            <div class="last-search">
                東京都、千代田区、賃貸、1LDK、10万
            </div> -->

            <div class="trigger"  @click="isShow = !isShow">
                <fa class="icon fc" :icon="isShow? 'angle-left': 'angle-right'"/>
            </div>
            <div class="mode block">
                {{ conditionStore.mode==="sell"? "売買": "賃貸"}}
            </div>

            <div class="fc-wrapper">
                <FirstCondition 
                    v-for="fc, index in fcs" 
                    :title="fc.title" 
                    :engTitle="fc.engTitle" 
                    :fc="fc.values[cityIndex]" 
                    :index="index">
                </FirstCondition>
            </div>
        </div>
    </Teleport>
</template>
    
<script setup>
    import FirstCondition from './FirstCondition.vue';

    import { ref, computed } from 'vue';

    import {fcs} from '@/config/search.js'

    import { useConditionStore } from '@/stores/condition'
    const conditionStore = useConditionStore()

    // 根据城市，显示不同的fc(first condition)
    const cityIndex = computed(() => {
        return conditionStore.cityIndex
    })
    

    // fc之内的联动

    // 侧边栏隐藏事件
    const isShow = ref(false)
    if (!conditionStore.isFunctionTriggered) {
        setTimeout(() => {
            isShow.value = true
        }, 300)
        conditionStore.isFunctionTriggered = true
    }
</script>
    
<style scoped  lang='less'>
    .sidebar {
        width: 230px;
        height: 100vh;
        padding: 30px 30px;
        background-color: rgba(178, 198, 218, 0.596);
        background-color: #fff6;
        backdrop-filter: blur(18px);
        display: flex;
        flex-direction: column;
        transform: translateX(-100%);
        transition: .3s ease;
        box-shadow: inset 1px 1px 5px rgba(255, 255, 255, 0.525),
                        1px 0 15px rgba(202, 200, 200, 0.333);

        &.show {
            transform: translateX(0);
        }
                    

        .trigger {
            width: 25px;
            height: 50px;
            background-color: #eee;
            border-radius: 5px;
            position: absolute;
            right: 0;
            top: 36%;
            transform: translateX(100%);
            box-shadow: 0 0 5px #aaa;
            cursor: pointer;

            &:hover {
                box-shadow: 0 0 5px #666;
            }

            .icon {
                position: absolute;
                right: 20%;
                top: 50%;
                transform: translateY(-50%);
            }
        }

        .block {
            margin-bottom: 15px;
            font-size: 20px;
            text-align: center;
            border-bottom: 1px solid #999;
        }

        .last-search {
            height: 50px;
            padding: 4px 5px;
            margin-bottom: 15px;
            border: 1px dotted #ccc;
            border-radius: 5px;
            transition: .1s ease;
            background-color: #fff;
            cursor: pointer;

            &:hover {
                box-shadow: 0 0 5px #666;
            }
        }
    }

    @media screen and (max-width: 415px) {
        .sidebar {
            width: 80vw;
        }
    }
</style>