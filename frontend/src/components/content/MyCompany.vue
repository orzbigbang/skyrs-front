<template>
    <div class="my-company">
		<div class="container">
            <div class="company-info fc">
                <h3 class="title">{{ companyBrief.name }}
                    <span class="deco-line left"></span>
                    <span class="deco-line right"></span>
                </h3>
                <div class="blocks">
                    <div class="block block-left">
                        <p class="info"><fa icon="phone"/>{{ companyBrief.tel }}</p>
                        <p class="info">{{ companyBrief.fax }}</p>
                        <p class="info"><fa icon="location-dot"/>{{ companyBrief.time }}</p>
                    </div>
                    <div class="placeholder-block"></div>
                    <div class="block block-right">
                        <p class="info"><fa icon="location-dot"/>{{ companyBrief.location }}</p>
                        <p class="info"><fa icon="train"/>{{ companyBrief.access }}</p>
                        <p class="info">{{ companyBrief.vacation }}</p>
                    </div>
                </div>

                <div class="map-wrapper">
                    <iframe
                        :src="googleMapUrl"
                        width="99%" height="99%" style="border:0;" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" data-aos="fade-right">
                    </iframe>
                </div>  
            </div>
		</div>
	</div>
</template>
    
<script setup>
    import {googleMapUrl} from '@/config/map.js'
    import {companyBrief} from '@/config/company.js'
</script>
    
<style scoped  lang='less'>
    .my-company {
        min-height: 250px;
        padding-top: 50px;
        font-family: 'Noto Serif JP', sans-serif;

        .company-info {
            font-size: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .title {
                margin-bottom: 30px;
                font-size: 36px;
                position: relative;

                .deco-line {
                    width: 23vw;
                    height: 1px;
                    background-color: rgb(31,78,121);
                    position: absolute;
                    top: 50%;

                    &.left {
                        left: 0;
                        transform: translateX(-110%);
                    }

                    &.right {
                        right: 0;
                        transform: translateX(110%);
                    }
                }
            }

            .blocks {
                width: 80%;
                margin-top: 10px;
                display: flex;
                
                .block {
                    flex: 1;
                    padding: 10px;
                    border-radius: 10px;

                    &.block-left {
                        background-color: rgb(230, 240, 249);
                    }

                    &.block-right {
                        background-color: rgb(225, 237, 214)
                    }
                }

                .placeholder-block {
                    width: 20px;
                    height: 20px;
                }
            }

            .info {
                margin-top: 20px;

                &:nth-child(1) {
                    margin-top: 5px;
                }
            }

            .map-wrapper {
                width: 80%;
                height: 320px;
                margin: 20px 0;
                border: 1px solid #ccc;
            } 
        }
    }

    @media screen and (max-width: 700px) {
        .container {
            width: 100%;
        }

        .my-company {

            .company-info {

                .blocks {
                    flex-direction: column;
                }
            }
        }
    }
</style>