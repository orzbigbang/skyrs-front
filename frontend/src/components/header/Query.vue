<template>
    <div class="form-wrapper">
        <form @submit.prevent="goQuery">
            <div class="type block">
                <div class="title">
                    {{ queryType }}
                </div>
            </div>
            
            <div class="name block">
                <div class="title">
                    名前 <span class="warn">※必須項目</span>
                </div>
                <div class="content-wrapper">
                    <div class="eng name-wrapper wrapper">
                        <div class="first-name n">
                            <input type="text" placeholder="例）タナカ" v-model="userInput.last_name_kana" required>
                        </div>
                        <div class="last-name n">
                            <input type="text" placeholder="例）タロウ" v-model="userInput.first_name_kana" required>
                        </div>
                    </div>
                    <div class="jpn name-wrapper wrapper">
                        <div class="first-name n">
                            <input type="text" placeholder="例）田中" v-model="userInput.last_name_kanji" required>
                        </div>
                        <div class="last-name n">
                            <input type="text" placeholder="例）太郎" v-model="userInput.first_name_kanji" required>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact block">
                <div class="title">
                    連絡方法 <span class="warn">※必須項目</span>
                </div>
                <div class="content-wrapper">
                    <div class="contact-wrapper wrapper">
                        <div class="first-name n">
                            <input type="email" placeholder="メールアドレス" v-model="userInput.email" required>
                        </div>
                        <div class="last-name n">
                            <input type="text" placeholder="電話番号" v-model="userInput.phone">
                        </div>
                    </div>

                    <div class="radio-wrapper">
                        <label>
                            <input type="radio" name="expect" value="email" v-model="userInput.contact_type">
                            メール連絡希望
                        </label>
                        <label>
                            <input type="radio" name="expect" value="phone" v-model="userInput.contact_type">
                            電話連絡希望
                        </label>
                        <label>
                            <input type="radio" name="expect" value="any" v-model="userInput.contact_type">
                            両方OK
                        </label>
                    </div>
                </div>
            </div>

            <div class="house block">
                <div class="title">
                    物件情報
                </div>
                <span class="warn">※必須項目</span>
                <div class="radio-wrapper">
                    <label>
                        <input type="radio" name="house_type" value="mansion"  v-model="userInput.house_type">
                        マンション・アパート
                    </label>
                    <label>
                        <input type="radio" name="house_type" value="one"  v-model="userInput.house_type">
                        一戸建て
                    </label>
                    <label>
                        <input type="radio" name="house_type" value="land" v-model="userInput.house_type">
                        土地
                    </label>
                </div>
                <input type="text" class="one-line-input" placeholder="郵便番号" v-model="userInput.post_code">
                <input type="text" class="one-line-input" placeholder="住所" v-model="userInput.address">
                <input type="text" class="one-line-input" placeholder="面積" v-model="userInput.area">
                <input type="text" class="one-line-input" placeholder="間取り" v-model="userInput.layout">
            </div>

            <div class="query block">
                <div class="title">
                    お問い合わせ内容 <span class="warn">※必須項目</span>
                </div>
                <div class="query-wrapper wrapper content-wrapper">
                    <textarea class="query-input" name="" cols="60" rows="8" v-model="userInput.query_content"></textarea>
                </div>
            </div>

            <button id="submit">送信</button>
            <div id="popup" v-show="sentEmail">送信完了しました</div>
        </form>
    </div>
</template>
    
<script setup>
    import { ref } from 'vue';

    import { useHeader } from '@/composition/userInfo.js'

    import { useQueryStore } from '@/stores/query.js'
    const queryStore = useQueryStore()

    const queryType = ref("お問い合わせ")

    const userInput = ref({
        query_type: "any",
        last_name_kana: "",
        first_name_kana: "",
        last_name_kanji: "",
        first_name_kanji: "",
        email: "",
        phone: "",
        contact_type: "any",
        query_content: "",
        house_type: "mansion",
        address: "",
        post_code: "",
        area: "",
        layout: "",
    })

    // 点击submit按钮时候发送邮件，并popup提示
    const sentEmail = ref(false)
    const header = useHeader()
    const goQuery = () => {
        // 添加节流功能
        if (sentEmail.value) {
            return
        }
        queryStore.postQuery(userInput.value, header)
        sentEmail.value = true

        // 2.5秒之后popup自动消失。        
        setTimeout(() => {
            sentEmail.value = false
        }, 2500)
    }

    // queryStore.getQuery(header)
    // queryStore.getQueryAdmin(header)
    // queryStore.getQueryAdmin(header, header)
</script>
    
<style scoped  lang='less'>
    .form-wrapper {
        width: 70%;
        height: 800px;
        margin: 20px auto;
        transition: .1s;

        .block {
            margin: 30px 0;
            .title {
                font-size: 18px;
                border-bottom: 1px solid #ccc;
                margin-bottom: 20px;
            }
        }

        span.warn {
            font-size: 12px;
            color: red;
        }

        input[type='text'], input[type='email'] {
            width: 100%;
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

        input.one-line-input {
            margin-top: 15px;
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
            width: 100%;
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
                width: 100%;
                margin-right: 30px;
            }

        }

        .radio-wrapper {
            display: flex;
            flex-direction: row;
        }
    }

    #popup {
        width: 10rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        position: fixed;
        top: 50%;
        left: 50%;
        background-color: #5454c613;
        backdrop-filter: blur(4px);
        box-shadow: 0 0 15px rgba(128, 128, 128, 0.333);
        border-radius: 20px;
        transition: .3s;
    }

    @media screen and (max-width:700px) {
        .form-wrapper {
            width: 80%;

            input[type='text'], input[type='email'] {
                &::placeholder {
                    font-size: 12px;
                }
            }

            .wrapper {
                .n {
                    margin-right: 5px;
                }
            }

            .radio-wrapper {
                flex-direction: column;
                
                label {
                    margin-bottom: 5px;
                }
            }
        }
    }
</style>