<template>
    <div class="fc">
        <div class="title" @click="showCondition(index)">
            {{ title }}
        </div>

        <div class="input-wrapper">
            <input class="search" type="text" placeholder="サーチ" 
                v-if="activeFCIndex===index" 
                v-model="searchBarInput" 
                @input="searchFC">
            <fa class="reset icon fc" icon="rotate-left" 
                v-if="activeFCIndex===index" 
                @click="reset"/>
        </div>
        

        <div class="value-wrapper" :class="{active: activeFCIndex===index? true: false}">
            <div class="value" v-for="value in filterd_values" :key="value">
                <label>
                    <input ref="cb" type="checkbox" 
                        v-if="activeFCIndex===index" 
                        :value="value" 
                        v-model="FCInput[value]" 
                        @change="getFCFilteredList($event)">
                    {{ activeFCIndex===index? value: "" }}
                </label>
            </div>
        </div>
    </div>
</template>
    
<script setup>
    import { ref, toRefs, reactive, computed } from 'vue'
    import { useConditionStore } from '@/stores/condition'
    const conditionStore = useConditionStore()

    const { activeFCIndex } = toRefs(conditionStore)

    import { useHouseStore } from '@/stores/house'
    const houseStore = useHouseStore()

    const props = defineProps(
        {
            title: String,
            engTitle: String,
            fc: Array,
            index: Number,
        }
    )

    // 激活block
    const showCondition = (index) => {
        if (index === activeFCIndex) {
            activeFCIndex.value = -1
        } else {
            activeFCIndex.value = index
        }
    }

    // 搜索框输入实时筛选
    const searchBarInput = ref("")
    const values = reactive([])
    const filterd_values = computed(() => {
        if (!searchBarInput.value) {
            return props.fc
        } else {
            return values.value
        }
    })
    const searchFC = () => {
        values.value = props.fc.filter((e) => {
            return e.indexOf(searchBarInput.value) !== -1
        })
    }

    // 勾选框v-model
    const FCInput = {_type: props.engTitle}

    // 重置FC搜索条件
    const cb = ref()
    const reset = () => {
        cb.value.forEach((item) => {
            item.checked = false
        })
        Object.keys(FCInput).forEach((key) => {
            if (key !== "_type") {
                FCInput[key] = false
            }
        })
        houseStore.filterAtbbHouseList(FCInput, "fc")
        houseStore.filterHouseList(FCInput)
        searchBarInput.value = ""
    }

    // 实时获取筛选过的房屋数据
    const getFCFilteredList = ($event) => {
        // 删掉没用的key
        if (!$event.target.checked) {
            delete FCInput[$event.target._value]
        }
        houseStore.filterAtbbHouseList(FCInput, "fc")
        houseStore.filterHouseList(FCInput)
    }
</script>
    
<style scoped lang='less'>
    .fc-wrapper {
        
        .fc {
            width: 100%;
            margin-bottom: 10px;

            &:nth-last-child(1) {
                margin-bottom: 50px;
            } 

            .input-wrapper{
                position: relative;
                .reset {
                    width: 20px;
                    cursor: pointer;
                    border-bottom: 1px solid rgba(7, 50, 91, 0);
                    transition: .2s;
                    position: absolute;
                    top: 2px;
                    right: 10px;
                    font-size: 20px;

                    &:hover {
                        transform: rotateZ(-360deg);
                    }
                }
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
                max-height: 13rem;
                border-radius: 10px;
                transition: .1s;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                position: relative;
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