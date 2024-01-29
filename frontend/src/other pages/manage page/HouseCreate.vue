<template>
    <h1>物件登録</h1>
    <div class="container">
        <div  v-if="!typeSelected" class="type-selection-wrapper">
            <div class="type-selection-sub-wrapper">
                <h2>売買</h2>
                <button class="type-selection" @click="goInput(1)">売買マンション</button>
                <button class="type-selection" @click="goInput(2)">売買一戸建て</button>
            </div>
            <div class="type-selection-sub-wrapper">
                <h2>賃貸</h2>
                <button class="type-selection" @click="goInput(3)">賃貸マンション・アパート</button>
                <button class="type-selection" @click="goInput(4)">賃貸一戸建て</button>
            </div>
        </div>
        <form v-else @submit.prevent="goSubmit">
            <div class="button-wrapper">
                <button id="submit" type="submit">✔️Submit</button>
                <button id="reset" type="reset" @click="cancelEdit">❌Reset</button>
                <button @click="goTypeSelect">戻る</button>
            </div>
            <div class="block">
                <h3 class="sub-title">基本情報</h3>
                <div class="input-item-wrapper" v-for="base in houseInputBases">
                    <span class="value-title">{{ base.title }}</span>
                    <input v-if="base.type ==='text'" type="text" :placeholder="base.placeHolder">
                    <select v-else-if="base.type ==='select'" name="">
                        <option value="" v-for="o in base.options">{{ o }}</option>
                    </select>
                </div>
            </div>
            <div class="block">
                <h3 class="sub-title">画像</h3>
                <div class="input-item-wrapper" v-for="img in houseInputImgs">
                    <span class="value-title">{{ img.title }}</span>
                    <input :type="img.type">
                </div>
            </div>
            <div class="block">
                <h3 class="sub-title">おすすめポイント</h3>
                <div class="input-item-wrapper" v-for="bp in houseInputBulletPoints">
                    <span class="value-title">{{ bp.title }}</span>
                    <input v-if="bp.type === 'text'" :type="bp.type" :placeholder="bp.placeHolder">
                    <textarea v-else-if="bp.type === 'textarea'" :placeholder="bp.placeHolder"></textarea>
                </div>
            </div>
            <div class="block">
                <h3 class="sub-title">設備</h3>
                <div class="input-item-wrapper" v-for="a in 10">
                    <span class="value-title">Item Name: </span>
                    <input type="text">
                </div>

            </div>
            <div class="block">
                <h3 class="sub-title">その他の情報</h3>
                <div class="input-item-wrapper" v-for="a in 10">
                    <span class="value-title">Item Name: </span>
                    <input type="text">

                </div>

            </div>
            <div class="block">
                <h3 class="sub-title">その他の特徴</h3>
                <div class="input-item-wrapper" v-for="a in 10">
                    <span class="value-title">Item Name: </span>
                    <input type="text">

                </div>

            </div>
        </form>
    </div>
</template>
    
<script setup>
    import { ref, onMounted } from 'vue'

    const typeSelected = ref(true)
    const type = ref(0)

    const goInput = (type_) => {
        typeSelected.value = true
        type.value = type_
    }

    const goTypeSelect = () => {
        typeSelected.value = false
    }

    const houseInputBases = ref({
        name: {title: "名前", type: "text", placeHolder: "名前を入力してください", required: true},
        address: {title: "住所", type: "text", placeHolder: "住所を入力してください", required: true},
        new: {title: "新築・中古", type: "select", placeHolder: "新築・中古を選択してください", required: true, options:["新築", "中古"]},
        city: {title: "都道府県", type: "select", placeHolder: "都道府県を選択してください", required: true, options:[""]},
        district: {title: "地域", type: "select", placeHolder: "地域を選択してください", required: true, options:[""]},
        station1: {title: "駅1", type: "select", placeHolder: "駅1を選択してください", required: true, options:[""]},
        station2: {title: "駅2", type: "select", placeHolder: "駅2を選択してください", required: false, options:[""]},
        station3: {title: "駅3", type: "select", placeHolder: "駅3を選択してください", required: false, options:[""]},
        layout: {title: "レイアウト", type: "select", placeHolder: "レイアウトを選択してください", required: true, options:[""]},
    })
    const houseInputImgs = ref({
        main_pic_url: {title: "メイン画像", type: "file", placeHolder: "メイン画像を選択してください", required: true},
        layout_pic_url: {title: "レイアウト画像", type: "file", placeHolder: "レイアウト画像を選択してください", required: true},
        other_image_1: {title: "その他の画像1", type: "file", placeHolder: "その他の画像1を選択してください", required: true},
        other_image_2: {title: "その他の画像2", type: "file", placeHolder: "その他の画像2を選択してください", required: true},
        other_image_3: {title: "その他の画像3", type: "file", placeHolder: "その他の画像3を選択してください", required: false},
        other_image_4: {title: "その他の画像4", type: "file", placeHolder: "その他の画像4を選択してください", required: false},
        other_image_5: {title: "その他の画像5", type: "file", placeHolder: "その他の画像5を選択してください", required: false},
        other_image_6: {title: "その他の画像6", type: "file", placeHolder: "その他の画像6を選択してください", required: false},
        other_image_7: {title: "その他の画像7", type: "file", placeHolder: "その他の画像7を選択してください", required: false},
        other_image_8: {title: "その他の画像8", type: "file", placeHolder: "その他の画像8を選択してください", required: false},
        other_image_9: {title: "その他の画像9", type: "file", placeHolder: "その他の画像9を選択してください", required: false},
        other_image_10: {title: "その他の画像10", type: "file", placeHolder: "その他の画像10を選択してください", required: false},
    })
    const houseInputBulletPoints = ref({
        brief_title: {title: "おすすめポイントタイトル", type: "text", placeHolder: "おすすめポイントタイトルをご入力ください", required: true},
        brief_desc: {title: "おすすめポイント詳細", type: "textarea", placeHolder: "おすすめポイント詳細をご入力ください", required: true},
        bullet_point_1: {title: "おすすめポイント1", type: "text", placeHolder: "おすすめポイント1をご入力ください", required: false},
        bullet_point_2: {title: "おすすめポイント2", type: "text", placeHolder: "おすすめポイント2をご入力ください", required: false},
        bullet_point_3: {title: "おすすめポイント3", type: "text", placeHolder: "おすすめポイント3をご入力ください", required: false},
        bullet_point_4: {title: "おすすめポイント4", type: "text", placeHolder: "おすすめポイント4をご入力ください", required: false},
        bullet_point_5: {title: "おすすめポイント5", type: "text", placeHolder: "おすすめポイント5をご入力ください", required: false},
        bullet_point_6: {title: "おすすめポイント6", type: "text", placeHolder: "おすすめポイント6をご入力ください", required: false},
        bullet_point_7: {title: "おすすめポイント7", type: "text", placeHolder: "おすすめポイント7をご入力ください", required: false},
        bullet_point_8: {title: "おすすめポイント8", type: "text", placeHolder: "おすすめポイント8をご入力ください", required: false},
        bullet_point_9: {title: "おすすめポイント9", type: "text", placeHolder: "おすすめポイント9をご入力ください", required: false},
        bullet_point_10: {title: "おすすめポイント10", type: "text", placeHolder: "おすすめポイント10をご入力ください", required: false},
    })
    const houseInputIcons = ref({})
    const houseInputOtherInfoTable = ref({})
    const houseInputOtherInfoList = ref({})

    const houseInput = [houseInputBases, houseInputImgs, houseInputBulletPoints, houseInputIcons, houseInputOtherInfoTable, houseInputOtherInfoList]
    
    const get_options = () => {
        // scan objects
        houseInput.forEach((proxy, index) => {
            Object.values(proxy.value).forEach((item) => {
                if (item.value !== undefined) {
                    console.log(item.value.title)
                }
            })
        })
        // get value
    }
    get_options()

</script>
    
<style scoped  lang='less'>
    h1, h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    button {
        width: 100px;
        height: 30px;
        margin-right: 20px;
        font-size: 16px;

        &.type-selection {
            width: 200px;
            height: 80px;
            margin-right: 0px;
            margin-bottom: 20px;
            cursor: pointer;

            &:nth-last-child(1) {
                margin-bottom: 0px;
            }
        }
    }

    textarea {
        width: 100%;
        height: 200px;
        padding: 5px;
        font-size: 14px;
    }

    input[type=text] {
        display: block;
        width: 100%;
        height: 30px;
        padding: 5px;
        margin-bottom: 10px;
        font-size: 18px;
        border: 1px solid #aaa;

        &:hover {
            border: 1px solid #666;
        }

        &:focus {
            box-shadow: 0 0 5px rgb(94, 137, 255);
        }

        &::placeholder {
            font-size: 14px;
            color: #999;
        }
    }

    input[type=file] {
        margin-left: 20px;
        margin-bottom: 10px;
    }

    select {
        display: block;
        margin-bottom: 10px;
    }

    .type-selection-wrapper {
        margin-top: 80px;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .type-selection-sub-wrapper {
            display: flex;
            flex-direction: column;
            padding: 20px;
            margin: 40px;
            border: 1px solid #ccc;

            .type-selection {
                
            }
        }
    }

    .block {
        width: 100%;
        min-height: 100px;
        margin: 30px 0;
        padding: 10px 20px;
        border: 1px solid #666;

        .sub-title {
            margin-bottom: 10px;
            text-decoration: underline;
            color: #333;
        }
    }
</style>