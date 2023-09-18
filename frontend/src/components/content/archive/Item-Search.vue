<template>
        <div class="search">
                <div class="container">
                        <PartTitle :eng="'search'" :jpn="'検索'"/>
                        <div class="card-wrapper">
                                <PartSearchCard v-for="card in cards" :key="card.title" :title="card.title" :icon="card.icon"></PartSearchCard>
                        </div>
                </div>
        </div>
</template>

<script setup>
import PartTitle from "./Part-Title.vue";
import PartSearchCard from "./Part-SearchCard.vue"

const cards = [
        {
                title: '学区から探す',
                icon: 'school',
        },
        {
                title: 'シングル',
                icon: 'person',
        },
        {
                title: 'ファミリー',
                icon: 'people-roof',
        },
        {
                title: 'タワーマンション',
                icon: 'building',
        },
        {
                title: '新築',
                icon: 'house',
        },
        {
                title: 'リノベーション',
                icon: 'screwdriver-wrench',
        },
        {
                title: 'ペット可',
                icon: 'paw',
        },
        {
                title: 'SOHO可',
                icon: 'computer',
        },
       
]

</script>

<style scoped lang="less">
        .card-wrapper {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
        }
</style>
