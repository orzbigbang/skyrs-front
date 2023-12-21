<template>
    <div>
        <div class="container">
            <PartTitle :eng="'Recommended'" :jpn="''"/>
            <div class="wrapper">
                <h3 class="title">「(株)セブンクラウドハウス」のおすすめ物件</h3>
            </div>
        </div>
        <ItemNewHouse2 class="item" :eng="'new house'" :jpn="atbbRecommendInfo.buyTitle" :cards="houseStore.atbbHouseListRB" :url="atbbRecommendInfo.moreBuyURL">
		    <div class="athome search-engine-rental responsive-koma-bukkens id_073049_20231201111102 count_10 size_middle"></div>
        </ItemNewHouse2>
        <ItemNewHouse2 class="item" :eng="'new house'" :jpn="atbbRecommendInfo.rentTitle" :cards="houseStore.atbbHouseListRR" :url="atbbRecommendInfo.moreRentURL">
            <div class="athome search-engine-rental responsive-koma-bukkens id_073049_20231201110654 count_10 size_middle"></div>
        </ItemNewHouse2>
    </div>
</template>
    
<script setup>
    import PartTitle from './Part-Title.vue';
    import ItemNewHouse2 from './Item-NewHouse2.vue'

    import { useHouseStore } from "@/stores/house"
	const houseStore = useHouseStore()

    import {atbbRecommendInfo} from '@/config/atbb.js'

    // atbb 推荐房屋长条状元素
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