import { ref } from "vue";
import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", () => {
	const isModalShow = ref(false)

	const closeModalSelection = () => {
		isModalShow.value = false
		isCitySelection.value = false;
		isSearchHistorySelection.value = false;
		isFavSelection.value = false;
		isQuickSearchSelection.value = false
		isQuerySelection.value = false
	}

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
	const showQuickSearchSelection = () => {
		isQuickSearchSelection.value = true
	}

	const isSearchHistorySelection = ref(false)
	const showSearchHistorySelection = () => {
		isSearchHistorySelection.value = true
	}

	const isFavSelection = ref(false)
	const showFavSelection = () => {
		isFavSelection.value = true
	}

	const isQuerySelection = ref(false)
	const showQuerySelection = () => {
		isQuerySelection.value = true
	}
	return {
		isModalShow,
		closeModalSelection,
		isCitySelection, isGoNext, showCitySelection,
		isSearchHistorySelection, showSearchHistorySelection,
		isFavSelection, showFavSelection,
		isQuickSearchSelection, showQuickSearchSelection,
		isQuerySelection, showQuerySelection,
	};
});
