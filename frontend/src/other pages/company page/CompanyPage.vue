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
</template>
    
<script setup>
    import {company} from "@/assets/js/company.js"
</script>
    
<style scoped  lang='less'>
    .title {
        text-align: center;
        margin: 30px auto;
        font-size: 36px;
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
        }

        th {
            padding-right: 30px;
        }
    }
</style>