<template>
    <button :style="{ fontFamily: font, fontSize: `${size}` }" :class="`hover ${tailwind} pl-6 pr-6 pt-2 pb-2 rounded-full text-black`" @click="clicked">{{text}}</button>
</template>

<script>

export default {
    name: "Button",
    props:{
        text: {
            type: String,
            default: "Default",
            required: false
        },
        size: {
            default: "2rem",
            type: String,
            required: false
        },
        font: {
            default: "athene",
            type: String,
            required: false
        },
        tailwind: {
            default: "",
            type: String,
            required: false
        }
    },
    methods:{
        clicked(){
            this.$emit('click')
        }
    }
}

</script>

<style scoped>
.hover:hover{
    transition: all ease 0.3s;
    transform: scale(90%);
}
</style>