<template>
    <div class="banner-wrapper">
        <div class="container">
            <div class="info-wrapper">
                <span class="title">お知らせ</span>                
                <span class="desc">ご所有不動産の売却査定価格を無料でご提案させていただきます。売却に関するご相談などもお気軽にお問合せ下さい。</span>
                <span class="info">7cloud house©</span>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="less">
    .banner-wrapper {
        width: 88rem;
        aspect-ratio: 2;
        margin: 20px auto;
        background: url('@/assets/imgs/heroimage2.jpg');
        background-size: cover;
        box-shadow: 0 4px 5px #666;
        border-radius: 10px;
        position: relative;

        .info-wrapper {
            width: 24rem;   
            height: 50%;
            padding: 30px;
            position: absolute;
            right: 10%;
            top: 50%;
            transform: translatey(-50%);
            background-color: #5454c613;
            border-radius: 20px;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
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
</style>
