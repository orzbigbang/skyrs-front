import { ref } from "vue";
import { defineStore } from "pinia";

export const useConditionStore = defineStore("condition", () => {
	const isCitySet = ref(false);
	const isFCSet = ref(false);
	const city = ref("都道府県の選択");
	const cityIndex = ref(1);
	const fc = ref("");
	const mode = ref("")
	const type = ref("")
	const new_ = ref("")
	const houseIndex = ref(1)
	const activeFCIndex = ref(0)
	const queryType = ref("any")

	return {
		city,
		cityIndex,
		fc,
		isCitySet,
		isFCSet,
		mode,
		type,
		new_,
		houseIndex,
		activeFCIndex,
		queryType,
	};
});
