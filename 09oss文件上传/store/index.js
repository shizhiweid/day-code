import { defineStore } from "pinia"

export const userStore = defineStore("user", {
    state: () => {
        return {
            count: "pinia",
        }
    },
    getters: {},
    actions: {

    }
})