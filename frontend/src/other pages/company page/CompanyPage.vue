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

    const googleMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.134635691164!2d139.77376557625897!3d35.698304329035174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ea8939b6a1d%3A0x9d3db507b80fd0f3!2z44CSMTAxLTAwMjUg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy656We55Sw5L2Q5LmF6ZaT55S677yS5LiB55uuIOiXpOazouODk-ODqw!5e0!3m2!1sja!2sjp!4v1700268427717!5m2!1sja!2sjp"
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