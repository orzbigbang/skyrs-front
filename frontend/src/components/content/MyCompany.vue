<template>
    <div class="my-company">
		<div class="container">
            <div class="company-info fc">
                <h3 class="title">7cloud house
                    <span class="deco-line left"></span>
                    <span class="deco-line right"></span>
                </h3>
                <div class="blocks">
                    <div class="block block-left">
                        <p class="info"><fa icon="phone"/> Tel: 03-5829-5615</p>
                        <p class="info"> Fax: 03-5829-5616</p>
                        <p class="info"><fa icon="location-dot"/> 営業時間: 10:30 ~ 17:00</p>
                    </div>
                    <div class="placeholder-block"></div>
                    <div class="block block-right">
                        <p class="info"><fa icon="location-dot"/> 所在地: 東京都千代田区神田佐久間町2-13-33藤波ビル4F</p>
                        <p class="info"><fa icon="train"/> 交通: JR山手線「秋葉原駅」昭和口徒歩2分</p>
                        <p class="info"> 定休日: 火・水・祝日 / 年末年始・GW・夏季休暇</p>
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
    const googleMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.134635691164!2d139.77376557625897!3d35.698304329035174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ea8939b6a1d%3A0x9d3db507b80fd0f3!2z44CSMTAxLTAwMjUg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy656We55Sw5L2Q5LmF6ZaT55S677yS5LiB55uuIOiXpOazouODk-ODqw!5e0!3m2!1sja!2sjp!4v1700268427717!5m2!1sja!2sjp"
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