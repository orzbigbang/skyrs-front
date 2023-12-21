<template>
    <div class="container">
        <h3 class="title">7cloud house</h3>
        <table>
            <tr v-for="info in company">
                <th :rowspan="info.multi">{{ info.key }}</th>
                <td>{{ info.value }}</td>
            </tr>
        </table>
    </div>

    <div class="map-wrapper">
        <iframe
            :src="googleMapUrl"
            width="99%" height="99%" style="border:0;" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" data-aos="fade-right">
        </iframe>
    </div>  
</template>
    
<script setup>
    import {company} from "@/assets/js/company.js"
    import {googleMapUrl} from "@/config/map.js"
</script>
    
<style scoped  lang='less'>
    .title {
        text-align: center;
        margin: 30px auto;
        font-size: 36px;
        font-family: 'Noto Serif JP', sans-serif;
    }

    table {
        margin: 20px auto;
        font-size: 16px;
        font-family: 'Noto Serif JP', sans-serif;

        tr {
            border-bottom: 1px dotted #ccc;
        }

        th, td {
            padding-bottom: 10px;
            padding-top: 10px;
            padding-right: 20px;
        }

        th {
            padding-left: 20px;
            padding-right: 100px;
        }
    }

    .map-wrapper {
        width: 70%;
        height: 450px;
        margin: 20px auto;
        border: 1px solid #ccc;
    } 
</style>