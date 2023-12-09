<template>
    <div>
        <div class="container">
            <PartTitle :eng="'Recommended'" :jpn="''"/>
            <div class="wrapper">
                <h3 class="title">「(株)セブンクラウドハウス」のおすすめ物件</h3>
                <!-- <p class="detail">全国8.5万棟以上のマンション情報（物件概要、外観写真、売出情報、購入希望者情報、周辺相場推移など）をご覧いただけます。ご所有のマンションの売買・賃料相場を知りたい方、ご興味ある地域にどんなマンションがあるかを知りたい方は是非ご利用ください。</p>
                <ul class="card-wrapper">
                    <PartCard3 class="card" v-for="card in cards" :key="card.title" :card="card"></PartCard3>
                </ul> -->
            </div>
        </div>
        <ItemNewHouse2 class="item" :eng="'new house'" :jpn="'売買☆おすすめ物件特集☆《マンション》《一戸建て》《事業用》'" :cards="cardsBuy" :url="moreBuyURL"/>
        <ItemNewHouse2 class="item" :eng="'new house'" :jpn="'賃貸☆おすすめ物件特集☆《マンション・アパート》《一戸建て》《事業用》'" :cards="cardsRent" :url="moreRentURL"/>
    </div>
</template>
    
<script setup>
    import PartTitle from './Part-Title.vue';
    import PartCard3 from './Part-Card3.vue';
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

    // const cardsBuy = [
    //     {
    //         img: 'imgs/welcome_card_img_01.jpg',
    //         tag: '売買居住用',
    //         price: '40000000',
    //         station: '東京メトロ副都心線 北参道駅 徒歩 5 分',
    //         area: '48m²',
    //         layout: '1LDK',
    //         url: "https://asp.athome.jp/073049/shubetsu/baibai_kyojuyo/osusume"
    //     },
    //     {
    //         img: 'imgs/welcome_card_img_02.jpg',
    //         tag: '売買居住用',
    //         price: '40000000',
    //         station: '東京メトロ副都心線 北参道駅 徒歩 5 分',
    //         area: '48m²',
    //         layout: '1LDK',
    //         url: "https://asp.athome.jp/073049/shubetsu/baibai_kyojuyo/osusume"
    //     },
    //     {
    //         img: 'imgs/welcome_card_img_03.jpg',
    //         tag: '売買居住用',
    //         price: '40000000',
    //         station: '東京メトロ副都心線 北参道駅 徒歩 5 分',
    //         area: '48m²',
    //         layout: '1LDK',
    //         url: "https://asp.athome.jp/073049/shubetsu/baibai_kyojuyo/osusume"
    //     },
    //     {
    //         img: 'imgs/welcome_card_img_02.jpg',
    //         tag: '売買居住用',
    //         price: '40000000',
    //         station: '東京メトロ副都心線 北参道駅 徒歩 5 分',
    //         area: '48m²',
    //         layout: '1LDK',
    //         url: "https://asp.athome.jp/073049/shubetsu/baibai_kyojuyo/osusume"
    //     }
    // ]
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