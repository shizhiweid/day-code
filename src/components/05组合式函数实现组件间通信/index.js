import { ref } from "vue"
export const num = ref(0)

export function jia() {
    num.value++
}
export function jian() {
    num.value--
}