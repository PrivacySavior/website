<template>
    <div :style="{ width: width, height: height }">
        <input ref="input" class="border-0 outline-0 text-white bg-transparent font-montserrat text-[1.2rem] w-full h-full" :placeholder="placeholder"/>
        <div class="w-full h-1 bg-gradient-to-br from-accent2 to-accent1"></div>
    </div>
</template>

<script>
export default {
    name: "TextInput",
    props: {
        width: {
            default: "100%",
            required: false,
            type: String
        },
        height: {
            default: "100%",
            required: false,
            type: String
        },
        placeholder: {
            default: "Placeholder",
            required: false,
            type: String
        }
    },
    methods:{
        get_value(){
            return this.$refs.input.value
        },
        clear_value(){
            this.$refs.input.value = ""
        }
    }
}
</script>

<style scoped>

</style>