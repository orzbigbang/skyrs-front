<template>
    <div class="pagger-wrapper">
        <ul @click="goPage($event)" v-if="total > middlePage + 2">
            <li class="first-page page" :class="{active: activeIndex === 1? true: false}">1</li>
            <li class="pass" v-if="showLeftPass">...</li>
            <li class="middle-page page" :class="{active: activeIndex === index + pageOffset? true: false}" v-for="index in middlePage">{{ index + pageOffset}}</li>
            <li class="pass" v-if="showRightPass">...</li>
            <li class="last-page page" :class="{active: activeIndex === total? true: false}">{{ total }}</li>
        </ul>
        <ul @click="goPage($event)" v-else>
            <li class="page" :class="{active: activeIndex === index? true: false}" v-for="index in total">{{ index }}</li>
        </ul>
    </div>
</template>
    
<script setup>
    import { ref, computed } from 'vue'

    // 需要从父组件传入totalPage和中间页码（1和最大值以外的页码）的数量
    const props = defineProps({
        pagerConfig: Object
    })

    const {pagerConfig: {total, middlePage}} = props

    // 往父组件传递当前页码
    const emit = defineEmits(["on-click"])

    // 根据activeIndex计算出页码显示方案
    const activeIndex = ref(1)
    // 用pageOffset生成出中间页码
    const pageOffset = computed(() => {
        // activeIndex接近1的时候的逻辑
        if (activeIndex.value <= Math.ceil(middlePage / 2) ) {
            return 1
        // activeIndex接近最大值的时候的逻辑
        } else if (activeIndex.value >= total - Math.floor(middlePage / 2) - 1) {
            return total - middlePage - 1
        // activeIndex在中间部分时候的逻辑
        } else {
            return activeIndex.value - middlePage + Math.floor(middlePage / 2) 
        }
    }) 
    // 左侧的三个点的显示时机
    const showLeftPass = computed(() => {
        if (activeIndex.value <= Math.ceil(middlePage / 2) + 1 ) {
            return false
        } else {
            return true
        }
    })
    // 右侧的三个点的显示时机
    const showRightPass = computed(() => {
        if (activeIndex.value >= total - Math.floor(middlePage / 2) - 1) {
            return false
        } else {
            return true
        }
    })

    // 页码点击事件（事件委托）
    const goPage = ($event) => {
        if ($event.target.className.indexOf("page") !== -1) {
            activeIndex.value = +$event.target.innerHTML

            // 往父组件传递数据，以更新房屋列表
            emit("on-click", activeIndex.value)
        }
    }
</script>
    
<style scoped  lang='less'>
    .pagger-wrapper {
        margin-top: 20px;

        ul {
            display: flex;
            flex-direction: row;
            justify-content: center;

            li {
                width: 20px;
                font-size: 15px;
                color: #666;
                text-align: center;

                &:nth-child(1) {
                    margin-right: 10px;
                }

                &:nth-last-child(1) {
                    margin-left: 10px;
                }

                &.page {
                    padding: 0 1px;
                    border-bottom: 1px solid transparent;
                    transition: .2s;
                    cursor: pointer;

                    &:hover {
                        border-bottom: 1px solid #666;
                        
                    }
                }

                &.active {
                    color: rgb(31,78,121);
                    font-weight: bold;
                    border-bottom: 1px solid rgb(31,78,121);
                }
            }

            .middle-page {
                margin: 0 10px;
            }
        }
    }
    
</style>