import { ref } from "vue";
import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", () => {
	const closeModalSelection = () => {
		isCitySelection.value = false;
		isSearchHistorySelection.value = false;
		isFavSelection.value = false;
		isQuickSearchSelection.value = false
		isQuerySelection.value = false
	};

	// isGoNext决定在模态框选中城市之后要不要继续跳到搜索页面
	const isCitySelection = ref(false);
	const isGoNext = ref(false)
	const showCitySelection = (goNext) => {
		isGoNext.value = false
		isCitySelection.value = true;
		if (goNext) {
			isGoNext.value = true
		}
	}

	const isQuickSearchSelection = ref(false)
	const showQuickSearchSelection = () => {
		isQuickSearchSelection.value = true;
	};

	const isSearchHistorySelection = ref(false)
	const showSearchHistorySelection = () => {
		isSearchHistorySelection.value = true;
	};

	const isFavSelection = ref(false)
	const showFavSelection = () => {
		isFavSelection.value = true;
	};

	const isQuerySelection = ref(false)
	const showQuerySelection = () => {
		isQuerySelection.value = true;
	};
	return {
		closeModalSelection,
		isCitySelection, isGoNext, showCitySelection,
		isSearchHistorySelection, showSearchHistorySelection,
		isFavSelection, showFavSelection,
		isQuickSearchSelection, showQuickSearchSelection,
		isQuerySelection, showQuerySelection,
	};
});
