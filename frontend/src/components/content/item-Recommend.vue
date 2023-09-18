<template>
    <div class="news">
        <div class="container">
            <PartTitle :eng="'Recommended'" :jpn="'おすすめ'"/>
            <PartContent :title="'「(株)セブンクラウドハウス」のおすすめ物件'" :detail="'全国8.5万棟以上のマンション情報（物件概要、外観写真、売出情報、購入希望者情報、周辺相場推移など）をご覧いただけます。ご所有のマンションの売買・賃料相場を知りたい方、ご興味ある地域にどんなマンションがあるかを知りたい方は是非ご利用ください。'">
                <div class="card-wrapper">
                    <PartCard3 class="card" v-for="card in cards" :key="card.title" :card="card"></PartCard3>
                </div>
            </PartContent>
        </div>
    </div>
</template>
    
<script setup>
    import PartTitle from './Part-Title.vue';
    import PartContent from './Part-Content.vue'
    import PartCard3 from './Part-Card3.vue';

    const cards = [
        {
            img: 'imgs/welcome_card_img_01.jpg',
            title: '中古マンション',
            category: 'ライブラリー',
            detail: '全国で分譲させた8.5万棟以上のマンションをご紹介します。',
        },
        {
            img: 'imgs/welcome_card_img_02.jpg',
            title: 'プレミアムマンション',
            category: 'ライブラリー',
            detail: '中古マンションライブラリーの中から住友不動産販売がセレクトした高級マンションをご紹介します。',
        },
        {
            img: 'imgs/welcome_card_img_03.jpg',
            title: '住友不動産販売',
            category: 'セレクトサイト',
            detail: '住友不動産グループが販売した代表的なマンションの魅力をご紹介します。',
        },
    ]
</script>
    
<style scoped lang="less">
    .news {
        .card-wrapper {
            width: 100%;
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
    }
    
</style>