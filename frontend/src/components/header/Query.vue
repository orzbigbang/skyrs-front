<template>
    <div class="form-wrapper">
        <form>
            <div class="type block">
                <div class="title">
                    相談タイプ
                </div>
                <div class="content-wrapper">
                    <div class="radio-wrapper">
                        <label>
                            <input type="radio" name="type" value="sell" v-model="userInput.query_type">
                            売買のお問い合わせ
                        </label>
                        <label>
                            <input type="radio" name="type" value="rent" v-model="userInput.query_type">
                            賃貸のお問い合わせ
                        </label>
                        <label>
                            <input type="radio" name="type" value="any" v-model="userInput.query_type">
                            ただのお問い合わせ
                        </label>
                    </div>
                </div>
            </div>
            
            <div class="name block">
                <div class="title">
                    名前 <span>※必須項目</span>
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
                    連絡方法 <span>※必須項目</span>
                </div>
                <div class="content-wrapper">
                    <div class="contact-wrapper wrapper">
                        <div class="first-name n">
                            <input type="text" placeholder="メールアドレス" v-model="userInput.email" required>
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

            <div class="query block">
                <div class="title">
                    ご相談内容 <span>※必須項目</span>
                </div>
                <div class="query-wrapper wrapper content-wrapper">
                    <textarea class="query-input" name="" cols="60" rows="8" v-model="userInput.query_content"></textarea>
                </div>
            </div>

            <button id="submit" @click.prevent="console.log(userInput)">送信</button>
        </form>
    </div>
</template>
    
<script setup>
    const userInput = {
        query_type: "any",
        last_name_kana: "",
        first_name_kana: "",
        last_name_kanji: "",
        first_name_kanji: "",
        email: "",
        phone: "",
        contact_type: "any",
        query_content: "",
    }
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

                span {
                    font-size: 12px;
                    color: red;
                }
            }
        }

        input[type='text'] {
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

    @media screen and (max-width:700px) {
        .form-wrapper {
            width: 80%;

            input[type='text'] {
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