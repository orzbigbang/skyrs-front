<template>
	<div class="search-page">
		<MySidebar></MySidebar>
		<div class="search-condition">
			<div class="container">
				<MyTag>検索条件</MyTag>
				<div class="search-wrapper">
					<SearchCondition v-for="condition in fixedConditions" :key="condition.title" :condition="condition">
						<select v-if="condition.type === 'select'" v-model="condition.input[condition.name]">
							<option v-for="value in condition.values" :value="value">{{ value }}</option>
						</select>

						<label v-else-if="condition.type === 'checkbox'" v-for="value in condition.values">
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

					
					<div v-show="showMore" class="more-condition">
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
					</div>

					<div class="submit-wrapper">
						<div class="show-more fc" @click="showMore=!showMore">{{ !showMore? '条件の追加': '閉める' }}<fa class="icon fc" :icon="!showMore? 'angles-down': 'angles-up'"/></div>
						<button class="submit bacc" @click="submitForm">この条件で探す</button>
						<div class="reset fc" @click="reset">リセット<fa class="icon fc" icon="rotate-left"/></div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="result">
			<div class="container">
				<MyTag>検索結果</MyTag>
				<span class="result-indicator">以下の<b>{{ houseList.length }}</b>件を探しました</span>

				<div class="exhibit">
					<HouseCard v-for="house in houseList" :keys="house.title" :house="house"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import MyTag from "@/components/functional/MyTag.vue";
	import HouseCard from "./HouseCard.vue";
	import SearchCondition from "./SearchCondition.vue";
	import MySidebar from './MySidebar.vue'

	import { ref, reactive, watch, computed, inject, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    const route = useRoute()
	import { useHouseStore } from "@/stores/house"
	const houseStore = useHouseStore()

	import { useUserStore } from "@/stores/user"
    const userStore = useUserStore()

	import { useConditionStore } from '@/stores/condition'
    const conditionStore = useConditionStore()

	// 使用 inject 访问全局变量
    const apiURL = inject('apiURL');

	// 根据路由获得不同数据
    const city = ref(route.params.city)
    const mode = ref(route.params.mode)
    const house_type = ref(route.params.house_type)
    const new_ = ref(route.params.new_)

    watch(() => route.params, (newVal) => {
		city.value = newVal.city
		mode.value = newVal.mode
		house_type.value = newVal.house_type
		new_.value = newVal.new_

		// 根据房屋类型渲染
		moreConditionsSelect.value = condition.moreConditionsSelect[houseIndex.value]
		moreConditionsCheckBox.value = condition.moreConditionsCheckBox[houseIndex.value]
    })

	// get house type
	const houseIndex = computed(() => {
		return conditionStore.houseIndex
    })

	// 各种条件数据
	import condition from './condition'
	const moreConditionsSelect = ref(condition.moreConditionsSelect[houseIndex.value])
    const moreConditionsCheckBox = ref(condition.moreConditionsCheckBox[houseIndex.value])
	const fixedConditions = reactive([
		{
			title: "価格",
			name: ["price_bottom", "price_top"],
			type: "selectRange",
			values: [
				["--指定なし--", "1", "2"], 
				["--指定なし--", "3", "4"]
			],
			input: {"price_bottom": "--指定なし--", "price_top": "--指定なし--"},
			desc: ["万円　～　", "万円"]
		},
		{
			title: "専有面積",
			name: ["area_bottom", "area_top"],
			type: "selectRange",
			values: [
				["--指定なし--", "", ""], 
				["--指定なし--", "", ""]
			],
			input: {"area_bottom": "--指定なし--", "area_top": "--指定なし--"},
			desc: ["m²　～　", "m²"]
		},
		{
			title: "駅徒歩",
			name: ["station_time_bottom", "station_time_top"],
			type: "selectRange",
			values: [
				["--指定なし--", "5分", "10分", "15分", "20分", "25分"], 
				["--指定なし--", "5分", "10分", "15分", "20分", "25分"]
			],
			input: {"station_time_bottom": "--指定なし--", "station_time_top": "--指定なし--"},
			desc: ["分　～　", "分"]
		},
		{
			title: "間取り",
			name: "layout",
			type: "checkbox",
			values: [
				{label: "1ルーム", value: '1r'}, 
				{label: "1K", value: '1k'},
				{label: "1DK", value: '1dk'},
				{label: "1LDK", value: '1ldk'},
				{label: "2K", value: '2k'},
				{label: "2DK", value: '2dk'},
				{label: "2LDK", value: '2ldk'},
				{label: "3K", value: '3k'},
				{label: "3DK", value: '3dk'},
				{label: "3LDK", value: '3ldk'},
				{label: "4K~", value: '4'},
			],
			input: {},
		},
	])
	
	// 显示更多条件
	const showMore = ref(false)

	// 表单提交功能
	const submitForm = () => {
		submitted.value = true
		// getNoConditionHouseList()
	}
	
	// 获取无特定条件的房屋列表
	const urlGetHouseList = `${apiURL}estate`
	const houseList = computed(() => {
		return houseStore.houseList
	})

	const getNoConditionHouseList = () => {
		const params = {city: convertCityName(city.value), mode: mode.value, house_type: house_type.value, new: new_.value}
		const headers = {Authorization: userStore.user_id}
		houseStore.getHouseList(urlGetHouseList, params, headers)
	}

	// 城市名转换成int
	const convertCityName = (city) => {
		let index
		switch (city) {
			case "東京":
				index = 1
				break
			case "横浜":
				index = 2
				break
			case "埼玉":
				index = 3
				break
			case "川崎":
				index = 4
				break
			default:
				index = 1
		}

		return index
	}

	// 表单重置功能
    const reset = () => {
		[...fixedConditions, ...moreConditionsSelect.value, ...moreConditionsCheckBox.value].forEach((item) => {
			Object.keys(item["input"]).forEach((key) => {
				item["input"][key] = "--指定なし--"
			})
		})
    }

	// 进入组件时，往下scroll一点
	onMounted(() => {
		window.scrollTo(0,100)
	})

</script>

<style scoped lang="less">
.search-page {
	position: relative;
	.container {
		width: 65%;
	}
	.search-wrapper {
		width: 100%;
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

		.other-selection {
			width: 100%;		
			margin: 15px 15px 15px 0;
			padding-left: 105px;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			color: #666;

			.selection-wrapper {
				width: 150px;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;
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
		min-height: 50vh;
		padding-top: 1px;
		padding-bottom: 50px;
		background-color: #fff;
		box-shadow: 0 4px 5px #ccc,
                    0 -4px 5px #ccc;

		.result-indicator {
			display: block;
			margin-bottom: 10px;
			color: #666;
		}

		.exhibit {
			width: 100%;
			border-top: 1px solid #ccc;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
}
</style>
