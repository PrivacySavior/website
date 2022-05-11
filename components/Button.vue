<template>
    <button :style="{ fontFamily: font, fontSize: `${size}px` }" :class="`${tailwind} pl-6 pr-6 pt-2 pb-2 rounded-full`">{{text}}</button>
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
            default: 100,
            type: Number,
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
    }
}

</script>
