<template>
    <div class="banner-wrapper">
        <div class="container1">
            <div class="info-wrapper">
                <span class="title">{{ info_mapping.title }}</span>                
                <span class="desc">{{ info_mapping.desc }}</span>
                <span class="info">{{ info_mapping.info }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    const info_mapping = {
        title: "お知らせ",
        desc: "ご所有不動産の売却査定価格を無料でご提案させていただきます。売却に関するご相談などもお気軽にお問合せ下さい。",
        info: "7cloud house©",
    }
</script>

<style scoped lang="less">
    .banner-wrapper {
        max-width: 88rem;
        width: 95%;
        min-height: 25rem;
        aspect-ratio: 2;
        margin: 20px auto;
        background: url('@/assets/imgs/hp2.png');
        background-size: cover;
        box-shadow: 0 4px 5px #666;
        border-radius: 20px;
        position: relative;

        .info-wrapper {
            width: 24rem;   
            padding: 30px;
            background-color: #5454c613;
            border-radius: 20px;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            position: absolute;
            top: 15%;
            right: 10%;
            backdrop-filter: blur(4px);
            box-shadow: inset 1px 1px 5px rgba(255, 255, 255, 0.525),
                        0 0 15px rgba(128, 128, 128, 0.333);

            .title {
                font-size: 2rem;
                margin-bottom: 20px;
            }

            .desc {
                height: 15rem;
                font-size: 1.3rem;
                text-align: center;
            }

            .info {
                font-size: 13px;
            }
        }
    }
    @media screen and (max-width: 900px) {
        .banner-wrapper {
            .info-wrapper {
                height: 100%;
                top: 0;
                right: 0;
            }
        }
    } 

    @media screen and (max-width: 500px) {
        .banner-wrapper {
            .info-wrapper {
                width: 100%;
            }
        }
    }
</style>
