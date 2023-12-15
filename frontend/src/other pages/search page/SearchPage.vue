<template>
	<MySidebar></MySidebar>
	<div class="search-condition">
		<div class="container">
			<MyTag>検索条件</MyTag>
			<span class="result-indicator"><b>{{ houseType }}</b>の検索条件でございます</span>

			<div class="search-wrapper">
				<SearchCondition v-for="condition in fixedConditions" :key="condition.title" :condition="condition">
					<label v-if="condition.type === 'checkbox'" v-for="value in condition.values">
						<input class="checkbox" :type="condition.type" :value="value.value" v-model="condition.input[value.value]">
						<span class="label">{{ value.label }}</span>
					</label>

					<div class="range" v-else-if="condition.type === 'selectRange'">
						<select v-model="condition.input[condition.name[0]]">
							<option v-for="value in condition.values[0]" :value="value">{{ value }}</option>
						</select>
						<span class="desc">{{ condition.desc[0] }}</span>
						<select v-model="condition.input[condition.name[1]]">
							<option v-for="value in condition.values[1]" :value="value">{{ value }}</option>
						</select>
						<span class="desc">{{ condition.desc[1] }}</span>
					</div>
				</SearchCondition>

				<!-- <div v-show="showMore" class="more-condition">
					<div class="other-selection">
						<div class="selection-wrapper" v-for="condition in moreConditionsSelect">
							<div class="title">{{ condition.title }}</div>
							<select v-model="condition.input[condition.name]">
								<option v-for="value in condition.values" :value="value">{{ value }}</option>
							</select>
						</div>
					</div>

					<SearchCondition v-for="condition in moreConditionsCheckBox" :condition="condition">
						<label v-for="value in condition.values">
							<input class="checkbox" type="checkbox" :value="value.value" v-model="condition.input[value.value]">
							<span class="label">{{ value.label }}</span>
						</label>
					</SearchCondition>
				</div> -->

				<div class="submit-wrapper">
					<span class="placeholder"></span>
					<!-- <span class="show-more fc" @click="showMore=!showMore" @touchstart.prevent="showMore=!showMore">{{ !showMore? '条件の追加': '閉める' }}<fa class="icon fc" :icon="!showMore? 'angles-down': 'angles-up'"/></span> -->
					<button class="submit bacc" @click="submitForm"  @touchstart.prevent="submitForm">この条件で探す</button>
					<span class="reset fc" @click="reset" @touchstart.prevent="reset">リセット<fa class="icon fc" icon="rotate-left"/></span>
				</div>
			</div>
		</div>
	</div>
	
	<div class="result">
		<div class="container">
			<MyTag>検索結果</MyTag>
			<span class="result-indicator" v-if="houseList.length">自社物件：以下の<b>{{ houseList.length }}</b>件を探しました</span>
			<div class="exhibit" v-if="houseStore.houseListLoaded && houseList.length">
				<HouseCard v-for="house in houseList" :keys="house.title" :house="house"/>
			</div>

			<span class="result-indicator">その他にも以下の<b>{{ atbbHouseList.length }}</b>件を探しました</span>
			<div class="exhibit" v-if="houseStore.houseListLoaded">
				<HouseCardAtbb v-for="house in atbbHouseList.slice(startIndex, endIndex)" :keys="house.title" :house="house"/>
			</div>

			<!-- <span class="result-indicator">以下の<b>{{ atbbHouseList.length }}</b>件を探しました</span>
			<div class="exhibit">
				<HouseCardAtbb v-for="house in atbbHouseList.slice(startIndex, endIndex)" :keys="house.title" :house="house"/>
			</div> -->

			<img class="loading" src="@/assets/imgs/loader.gif" v-else>

			<Pager :pagerConfig="{total: totalPage, middlePage: 5,}" @on-click="getActivePageNum"></Pager>
		</div>
	</div>
</template>

<script setup>
	import MyTag from "@/components/functional/MyTag.vue";
	import HouseCard from "./HouseCard.vue";
	import HouseCardAtbb from "./HouseCardAtbb.vue";
	import SearchCondition from "./SearchCondition.vue";
	import MySidebar from './MySidebar.vue'
	import Pager from '@/components/functional/Pager.vue'

	import { apiURL } from '@/config/config.js'
	const url = apiURL.estate

	import { ref, watch, computed } from 'vue';
    import { useRoute } from 'vue-router';
    const route = useRoute()
	import { useHouseStore } from "@/stores/house"
	const houseStore = useHouseStore()

	import { useConditionStore } from '@/stores/condition'
    const conditionStore = useConditionStore()

	// get house index
	const houseIndex = computed(() => {
		return conditionStore.houseIndex
    })

	// get house type
	const houseType = computed(() => {
		switch (houseIndex.value) {
			// case 1:
			// 	return "売買中古マンション"
			// case 2:
			// 	return "売買新築未入居マンション"
			// case 3:
			// 	return "売買中古一戸建て"
			// case 4:
			// 	return "売買新築一戸建て"
			// case 5:
			// 	return "売買土地"
			// case 6:
			// 	return "賃貸賃貸マンションアパート"
			// case 7:
			// 	return "賃貸賃貸一戸建て"
			// case 8:
			// 	return "賃貸土地"
			// case 9:
			// 	return "賃貸駐車場"
			case 1:
				return "売買マンション"
			case 3:
				return "売買一戸建て"
			case 4:
				return "賃貸マンション一戸建て"
		}
	})

	// get atbb type
	const atbbType = computed(() => {
		switch (houseIndex.value) {
			case 1:
				return "bm"
			case 3:
				return "bo"
			case 4:
				return "rmo"
		}
	})

	// 根据houseIndex获取各种条件数据
	import condition from '@/assets/js/condition.js'
	const fixedConditions = ref(condition.fixedConditionsSelect[houseIndex.value])
	const moreConditionsSelect = ref(condition.moreConditionsSelect[houseIndex.value])
    const moreConditionsCheckBox = ref(condition.moreConditionsCheckBox[houseIndex.value])

	// 获取无特定条件的房屋列表
	const houseList = computed(() => {
		return houseStore.filteredList
	})

	const atbbHouseList = computed(() => {
		return houseStore.filteredAtbbList
	})
	import { useHeader } from '@/composition/userInfo.js'
    const headers = useHeader()
	
	// 实时监听路由，获得不同的数据
    const cityIndex = ref(route.params.cityIndex)
    const mode = ref(route.params.mode)
    const house_type = ref(route.params.house_type)
    const new_ = ref(route.params.new_)
	let params = {city: cityIndex.value, mode: mode.value, house_type: house_type.value, new: new_.value}
	const getNoConditionHouseList = () => {
		const params = {city: cityIndex.value, mode: mode.value, house_type: house_type.value, new: new_.value}
		houseStore.getHouseList(url, params, headers, 0)
		houseStore.getAtbbHouseList(params, headers, atbbType.value)
	}
    watch(() => route.params, (newVal) => {
		params["city"] = cityIndex.value = newVal.cityIndex
		params["mode"] = mode.value = newVal.mode
		params["house_type"] = house_type.value = newVal.house_type
		params["new"] = new_.value = newVal.new_
		// 根据房屋类型渲染
		fixedConditions.value = condition.fixedConditionsSelect[houseIndex.value]
		moreConditionsSelect.value = condition.moreConditionsSelect[houseIndex.value]
		moreConditionsCheckBox.value = condition.moreConditionsCheckBox[houseIndex.value]
		getNoConditionHouseList()
    }, 
	{
		immediate: true
	})
	
	// 显示更多条件
	const showMore = ref(false)
	
	// 表单提交功能
	const userInput = ref({})
	import { useCollectSelect, useCollectCheckbox } from "@/composition/collect.js"
	const submitForm = () => {
		houseStore.houseListLoaded = false
		// 1.收集表单数据
		// 1.1 收集fixed条件数据
		fixedConditions.value.forEach((item, index) => {
			// index3的项目需要收集列表，所以分开处理
			if (index !== 2) {
				useCollectSelect(userInput, item)
			} else {
				useCollectCheckbox(userInput, item, "layout")
			}
		})
		// 1.2 收集select条件数据
		const lessTypeHouseIndexes = {4:4, 7:7, 8:8, 9:9}
		if (!(houseIndex.value in lessTypeHouseIndexes)) {
			moreConditionsSelect.value.forEach((item) => {
				useCollectSelect(userInput, item)
			})
			// 1.3 收集checkbox条件数据
			moreConditionsCheckBox.value.forEach((item) => {
				useCollectSelect(userInput, item)
			})
		}
		// 2.处理数据
		params = {...params, ...userInput.value}
		Object.keys(params).forEach((key) => {
			if (params[key] === "指定なし") {
				delete params[key]
			}
		})
		// 3.发送请求
		houseStore.getHouseList(url, params, headers, 0)
		houseStore.getAtbbHouseList(params, headers, atbbType.value)
		houseStore.filterAtbbHouseList(userInput.value, "other")
	}

	// 表单重置功能
    const reset = () => {
		let aggregatedList = []
		// 如果列表里有值的话，就添加到总列表里
		if (fixedConditions.value) {
			aggregatedList = [...aggregatedList, ...fixedConditions.value]
		}
		if (moreConditionsSelect.value) {
			aggregatedList = [...aggregatedList, ...moreConditionsSelect.value]
		}
		if (moreConditionsCheckBox.value) {
			aggregatedList = [...aggregatedList, ...moreConditionsCheckBox.value]
		}
		// 遍历列表，把kv的value改成 "指定なし"。 从而重置搜索条件
		aggregatedList.forEach((item) => {
			Object.keys(item["input"]).forEach((key) => {
				item["input"][key] = "指定なし"
			})
			if (item.name === "layout") {
				item.input = {}
			}
		})
    }

	// TODO: 点击空白处隐藏侧边栏功能

	// 获取房屋列表的activePageNum
	const startIndex = ref(0)
	const endIndex = ref(20)
	const getActivePageNum = (activePageNum) => {
		startIndex.value = (activePageNum - 1) * 20
		endIndex.value = startIndex.value + 20
		document.body.scrollTo(0, 550)
	}

	const totalPage = computed(() => {
		return parseInt((houseList.value.length + atbbHouseList.value.length) / 20)
	})
	
</script>

<style scoped lang="less">
	.container {
		width: 65%;
	}

	.result-indicator {
		display: block;
		margin-bottom: 10px;
		color: #666;
	}
	.search-wrapper {
		padding-top: 5px;
		padding-bottom: 30px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

		.divide-line {
			width: 100%;
			height: 2px;
			margin-bottom: 20px;
		}

		.search-indicator {
			margin: 30px 0 10px;
			font-size: 1rem;
		}

		.label {
			margin-left: 3px;
			margin-right: 11px;
			vertical-align: middle;
		}

		.desc {
			margin-left: 3px;
		}

		.range {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: nowrap;
			padding-left: 5px;
		}

		.other-selection {
			margin: 15px 15px 15px 0;
			padding-left: 105px;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;
			color: #666;

			.selection-wrapper {
				margin-right: 20px;
				margin-bottom: 8px;
				padding-left: 3px;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;

				&:nth-last-child(1) {
					margin-right: 0px;
				}

				.title {
					margin-bottom: 3px;
				}
			}
		}

		.submit-wrapper {
			width: 100%;
			margin: 40px 0 20px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.show-more {
				// margin-left: 50px;
				cursor: pointer;
				border-bottom: 1px solid rgba(7, 50, 91, 0);
				transition: all .1s linear;

				&:hover {
					border-bottom: 1px solid rgb(7, 51, 91);
				}

				&:hover .icon {
					transform: rotateZ(-360deg);
				}

				.icon {
					transition: .2s;
				}
			}

			.submit {
				width: 200px;
				height: 40px;
				font-size: 1rem;
				color: #fff;
				border: none;
				border-radius: 10px;
				cursor: pointer;
				transition: all .1s linear;

				&:hover {
					background-color: rgb(7, 51, 91);
					border-radius: 30px;
				}
			}
			
			.reset {
				margin-right: 50px;
				cursor: pointer;
				border-bottom: 1px solid rgba(7, 50, 91, 0);
				transition: all .1s linear;

				&:hover {
					border-bottom: 1px solid rgb(7, 51, 91);
				}

				&:hover .icon {
					transform: rotateZ(-360deg);
				}
			}

			.icon {
				margin-left: 5px;
				font-size: 16px;
				transition: .2s;
			}
		}

		.more-condition {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}

	.result {
		min-height: 100vh;
		padding-top: 1px;
		padding-bottom: 50px;
		background-color: #fff;
		box-shadow: 0 4px 5px #ccc,
                    0 -4px 5px #ccc;

		.exhibit {
			border-top: 1px solid #ccc;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}

		.loading {
			display: block;
			margin: 0 auto;
		}
	}

	@media screen and (max-width:991.98px) {
		.container {
			width: 90%;
		}

		.search-wrapper {

			.range {
				padding-left: 0px;
			}
			.other-selection {
				padding-left: 72px;
			}

			.submit-wrapper {
				.submit {
					width: 140px;
				}
			}
    	}
	}

	@media screen and (max-width: 700px) {

	}
</style>
