<template>
    <div class="fc">
        <div class="title" @click="showCondition($event, props.index)">
            {{ props.title }}
        </div>

        <input class="search" type="text" placeholder="サーチ" v-if="conditionStore.activeFCIndex===props.index" v-model="searchBarInput" @input="searchFC">

        <div class="value-wrapper" :class="{active: conditionStore.activeFCIndex===props.index? true: false}">
            <fa class="reset icon fc" icon="rotate-left" v-if="conditionStore.activeFCIndex===props.index" @click="reset"/>
            <div class="value" v-for="value in filterd_values" :key="value">
                <label>
                    <input ref="cb" type="checkbox" v-if="conditionStore.activeFCIndex===props.index" :value="value" v-model="FCInput[value]">
                    {{ conditionStore.activeFCIndex===props.index? value: "" }}
                </label>
            </div>
        </div>
    </div>
</template>
    
<script setup>
    import { ref, reactive, computed } from 'vue'
    import { useConditionStore } from '@/stores/condition'
    const conditionStore = useConditionStore()

    const props = defineProps(
        {
            title: String,
            fc: Array,
            index: Number,
        }
    )

    // 激活block
    const showCondition = ($event, index) => {
        if (index === conditionStore.activeFCIndex) {
            conditionStore.activeFCIndex = -1
        } else {
            conditionStore.activeFCIndex = index
        }
    }

    // 搜索栏实时筛选
    const searchBarInput = ref("")
    const filterd_values = computed(() => {
        if (!searchBarInput.value) {
            return props.fc
        } else {
            return values.value
        }
    })
    const values = reactive([])
    const searchFC = () => {
        values.value = props.fc.filter((e) => {
            return e.indexOf(searchBarInput.value) !== -1
        })
    }

    // 勾选框v-model
    const FCInput = {}

    // 重置FC搜索条件
    const cb = ref()
    const reset = () => {
        cb.value.forEach((item) => {
            item.checked = false
        })
    }
</script>
    
<style scoped  lang='less'>
    .fc-wrapper {
        
        .fc {
            width: 100%;
            margin-bottom: 10px;

            &:nth-last-child(1) {
                margin-bottom: 50px;
            } 

            .title {
                height: 40px;
                line-height: 40px;
                text-align: center;
                color: #fff;
                background-color: rgb(69, 119, 167);
                border-radius: 10px;
                margin-bottom: 10px;
                transition: .1s;
                cursor: pointer;

                &:hover {
                    border: 1px solid #fff;
                    border-radius: 30px
                }
            }

            .search {
                width: 100%;
                height: 24px;
                padding: 0 5px;
                line-height: 30px;
                font-size: 16px;
                margin-bottom: 5px;
            }

            .value-wrapper {
                width: 100%;
                min-height: 0rem;
                max-height: 10rem;
                border-radius: 10px;
                transition: .1s;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                position: relative;

                .reset {
                    width: 20px;
                    cursor: pointer;
                    border-bottom: 1px solid rgba(7, 50, 91, 0);
                    transition: .2s;
                    position: absolute;
                    top: 5px;
                    right: 10px;

                    &:hover {
                        transform: rotateZ(-360deg);
                    }
                }

                .icon {
                    font-size: 20px;
                }
            }

            .value-wrapper.active {
                padding: 5px 10px;
                min-height: 10rem;
                overflow-y: scroll;
                transition: .1s;
            }
        }
    }

</style>