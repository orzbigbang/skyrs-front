<template>
    <div class="news">
        <div class="container">
            <PartTitle :eng="'service'" :jpn="'サービス'"/>
            
            <swiper 
                :autoplay="{ delay: 3000, disableOnInteraction: false }" 
                :navigation="true" 
                :pagination="{ clickable: true}" 
                :modules="modules" 
                class="mySwiper"
            >  
                <swiper-slide v-for="item in items" >
                    <img :src="item.image">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
    
<script setup>
    import PartTitle from './Part-Title.vue';
        
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from "swiper/vue";

    // Import Swiper styles
    import "swiper/css";

    import "swiper/css/navigation";
    import "swiper/css/pagination";

    import "@/assets/css/swiper-style.css";

    // import required modules
    import {Autoplay, Navigation, Pagination}  from "swiper";
    const modules = [Autoplay, Navigation, Pagination]

    const items = [
        {
            image: "imgs/info_slide1.jpg",
        },
        {
            image: "imgs/info_slide2.jpg",
        },
        {
            image: "imgs/info_slide3.jpg",
        },
        {
            image: "imgs/info_slide4.png",
        },
        {
            image: "imgs/info_slide5.jpg",
        },
    ]
    
</script>
    
<style scoped lang="less">
    

</style> 