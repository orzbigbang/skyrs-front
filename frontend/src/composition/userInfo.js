import { useUserStore } from "@/stores/user"

export const useHeader = () => {
    const userStore = useUserStore()
    const headers = {Authorization: userStore.user_id}
    return headers
}