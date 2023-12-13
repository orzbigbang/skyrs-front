<template>
    <div>
        <div class="container">
            <PartTitle :eng="'Recommended'" :jpn="''"/>
            <div class="wrapper">
                <h3 class="title">「(株)セブンクラウドハウス」のおすすめ物件</h3>
            </div>
        </div>
        <ItemNewHouse2 class="item" :eng="'new house'" :jpn="'売買☆おすすめ物件特集☆《マンション》《一戸建て》《事業用》'" :cards="cardsBuy" :url="moreBuyURL">
		    <div class="athome search-engine-rental responsive-koma-bukkens id_073049_20231201111102 count_10 size_middle"></div>
        </ItemNewHouse2>
        <ItemNewHouse2 class="item" :eng="'new house'" :jpn="'賃貸☆おすすめ物件特集☆《マンション・アパート》《一戸建て》《事業用》'" :cards="cardsRent" :url="moreRentURL">
            <div class="athome search-engine-rental responsive-koma-bukkens id_073049_20231201110654 count_10 size_middle"></div>
        </ItemNewHouse2>
    </div>
</template>
    
<script setup>
    import PartTitle from './Part-Title.vue';
    import ItemNewHouse2 from './Item-NewHouse2.vue'

	import {computed} from 'vue'

    import { useHouseStore } from "@/stores/house"
	const houseStore = useHouseStore()

    const cardsBuy = computed(() => {
		return houseStore.atbbHouseListRB
	})

    const moreBuyURL = "https://asp.athome.jp/073049/shubetsu/baibai/shumoku"

    const cardsRent = computed(() => {
		return houseStore.atbbHouseListRR
	})
    const moreRentURL = "https://asp.athome.jp/073049/shubetsu/chintai/shumoku"

    const script1 = document.createElement('script');
    script1.src = 'https://asp.athome.jp/responsive_koma_bukkens/ER_ID/073049/KOMA_ID/20231201110654/count/10/size/middle/list.js';
    document.head.appendChild(script1);
    const script2 = document.createElement('script');
    script2.src = 'https://asp.athome.jp/responsive_koma_bukkens/ER_ID/073049/KOMA_ID/20231201111102/count/10/size/middle/list.js';
    document.head.appendChild(script2);
</script>
    
<style scoped lang="less">
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .title {
            font-size: 34px;
            font-weight: bold;
        }

        .detail {
            margin: 20px 0;
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 2px;
        }
        .card-wrapper {
            width: 100%;
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
        }
    }

    @media screen and (max-width:700px) {
        .wrapper {
            .detail {
                font-size: 16px;
                font-weight: bold;
            }
        }
    }

    @media screen and (max-width:415px) {
        .wrapper {
            .title {
                font-size: 27px;
            }

            .detail {
                font-weight: normal;
            }
        }
    }
</style>