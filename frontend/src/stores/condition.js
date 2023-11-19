import { ref } from "vue";
import { defineStore } from "pinia";

export const useConditionStore = defineStore("condition", () => {
	const city = ref("東京");
	const cityIndex = ref(1);
	const fc = ref("");
	const mode = ref("")
	const type = ref("")
	const new_ = ref("")
	const houseIndex = ref(1)
	const activeFCIndex = ref(0)
	const queryType = ref("any")
	const isFunctionTriggered = ref(false)

	return {
		city,
		cityIndex,
		fc,
		mode,
		type,
		new_,
		houseIndex,
		activeFCIndex,
		queryType,
		isFunctionTriggered,
	};
});
