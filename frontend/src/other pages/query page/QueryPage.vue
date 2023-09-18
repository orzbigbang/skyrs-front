<template>
    <button @click="a">123</button>
    <div class="container">
        <div class="form-wrapper">
            <form>
                <div class="type block">
                    <div class="title">
                        相談タイプ
                    </div>
                    <div class="radio-wrapper">
                        <label>
                            <input type="radio" name="type" value="sell" :checked="queryType==='sell'">
                            売買のお問い合わせ
                        </label>
                        <label>
                            <input type="radio" name="type" value="rent" :checked="queryType==='rent'">
                            賃貸のお問い合わせ
                        </label>
                        <label>
                            <input type="radio" name="type" value="any" :checked="queryType==='any'">
                            ただのお問い合わせ
                        </label>
                    </div>
                </div>
                
                <div class="name block">
                    <div class="title">
                        名前 <span>※必須項目</span>
                    </div>
                    <div class="eng name-wrapper wrapper">
                        <div class="first-name n">
                            <input type="text" placeholder="例）タナカ" required>
                        </div>
                        <div class="last-name n">
                            <input type="text" placeholder="例）タロウ" required>
                        </div>
                    </div>
                    <div class="jpn name-wrapper wrapper">
                        <div class="first-name n">
                            <input type="text" placeholder="例）田中" required>
                        </div>
                        <div class="last-name n">
                            <input type="text" placeholder="例）太郎" required>
                        </div>
                    </div>
                </div>

                <div class="contact block">
                    <div class="title">
                        連絡方法 <span>※必須項目</span>
                    </div>
                    <div class="contact-wrapper wrapper">
                        <div class="first-name n">
                            <input type="text" placeholder="メールアドレス" required>
                        </div>
                        <div class="last-name n">
                            <input type="text" placeholder="電話番号">
                        </div>
                    </div>

                    <div class="radio-wrapper">
                        <label>
                            <input type="radio" name="expect" value="email">
                            メール連絡希望
                        </label>
                        <label>
                            <input type="radio" name="expect" value="phone">
                            電話連絡希望
                        </label>
                        <label>
                            <input type="radio" name="expect" value="both" checked>
                            両方OK
                        </label>
                    </div>
                </div>

                <div class="query block">
                    <div class="title">
                        ご相談内容
                    </div>
                    <div class="query-wrapper wrapper">
                        <textarea class="query-input" name="" cols="60" rows="8"></textarea>
                    </div>
                </div>

                <button id="submit">送信</button>
            </form>
        </div>
    </div>
    
</template>
    
<script setup>
    import { ref, watch } from 'vue';
    import { useRoute } from 'vue-router';
    const route = useRoute()

    const queryType = ref('any')

    watch(() => route.params.mode, (newVal, oldVal) => {
        queryType.value = newVal
    })

    import { useConditionStore } from '@/stores/condition'
    const conditionStore = useConditionStore()
    const a = () => {
        console.log(conditionStore.houseIndex)
    }
</script>
    
<style scoped  lang='less'>
    .form-wrapper {
        width: 700px;
        height: 800px;
        margin: 50px auto;
        padding: 10px 30px 30px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 0 10px #ccc;
        transition: .1s;

        &:hover {
            box-shadow: 0 0 15px #aaa;
        }

        .block {
            margin: 30px 0;
            .title {
                font-size: 18px;
                border-bottom: 1px solid #ccc;
                margin-bottom: 20px;

                span {
                    font-size: 12px;
                    color: red;
                }
            }
        }

        input[type='text'] {
            width: 300px;
            height: 30px;
            padding: 5px 10px;
            font-size: 14px;
            letter-spacing: 1px;
            border: 1px solid #ccc;
            border-radius: 5px;
            transition: .2s;

            &:hover {
                border: 1px solid #999;
            }

            &:focus {
                border: 1px solid #999;
                box-shadow: 0 0 5px rgb(64, 125, 238);
            }

            &::placeholder {
                color: #ccc;
            }
        }

        input[type='radio'] {
            width: 18px;
            height: 18px;
            
            transform: translateY(-10%);
            cursor: pointer;
        }
        label {
            font-size: 16px;
            color: #666;
            margin-right: 20px;

            &:hover {
                color: #222;
            }
        }

        textarea {
            width: 650px;
            line-height: 20px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;

            &:hover {
                border: 1px solid #999;
            }

            &:focus {
                border: 1px solid #999;
                box-shadow: 0 0 5px rgb(64, 125, 238);
            }
        }

        #submit {
            width: 100%;
            height: 70px;
            line-height: 70px;
            margin-top: 20px;
            font-size: 24px;
            text-align: center;
            color: #fff;
            background-color: #f77c00;
            border: none;
            border-radius: 5px;
            transition: .2s;
            cursor: pointer;

            &:hover {
                background-color: #ff8c00;
                box-shadow: inset 0 0 5px #fff;
            }
        }

        .wrapper {
            margin-bottom: 10px;
            display: flex;

            .n {
                margin-right: 30px;
            }

        }

        .radio-wrapper {
            display: flex;
            flex-direction: row;
        }
    }
</style>