import { ref } from "vue";
import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", () => {
	const isModalShow = ref(false)

	// isGoNext决定在模态框选中城市之后要不要继续跳到搜索页面
	const isCitySelection = ref(false)
	const isGoNext = ref(false)
	const showCitySelection = (goNext) => {
		isModalShow.value = true
		isCitySelection.value = true;
		isGoNext.value = false
		if (goNext) {
			isGoNext.value = true
		}
	}

	const isQuickSearchSelection = ref(false)
	const isSearchHistorySelection = ref(false)
	const isFavSelection = ref(false)
	const isQuerySelection = ref(false)

	const closeModalSelection = () => {
		isModalShow.value = false
		isCitySelection.value = false;
		isSearchHistorySelection.value = false;
		isFavSelection.value = false;
		isQuickSearchSelection.value = false
		isQuerySelection.value = false
	}

	
	return {
		isModalShow,
		isCitySelection, isGoNext, showCitySelection,
		isSearchHistorySelection,
		isFavSelection,
		isQuickSearchSelection,
		isQuerySelection,
		closeModalSelection,
	};
});
