<template>
    <div class="user-wrapper">
        <div class="user-info">
            <span class="row"><span class="value-title">ID：</span>{{ user.user_id }}</span>
            <span class="row"><span class="value-title">名前：</span>{{ user.name }}</span>
            <span class="row"><span class="value-title">権限：</span>{{ user.authority_code }}</span>
            <span class="row"><span class="value-title">電話：</span>{{ user.tel }}</span>
            <span class="row"><span class="value-title">メール：</span>{{ user.email }}</span>
            <span class="row"><span class="value-title">登録時間：</span>{{ user.created_at }}</span>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(
        {
            user: Object
        }
    )
    const {user} = props

    import { useRouter } from "vue-router";
    const router = useRouter()

    const goEdit = () => {
        router.push(`/usermanage/${user.user_id}`)
    }
</script>

<style scoped lang="less">
    .user-wrapper {
        display: flex;
        padding: 30px 0;
        border-bottom: 1px #aaa dotted;

        &:nth-last-child(1) {
            border-bottom: none;
        }

        .id {
            line-height: 7;
            font-size: 24px;
        }

        .img {
            width: 200px;
            height: 200px;
            margin-left: 30px;
            cursor: pointer;
        }

        .user-info {
            margin-left: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .row {
                font-size: 18px;

                .value-title {
                    color: #666;
                }
            }
        }
    }
</style>
