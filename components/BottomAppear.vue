<template>
    <div class="overflow-y-hidden">    
        <div :class="`${tailwind} initial`" :style="{ fontFamily: font, fontSize: `${size}px` }" ref="text">
            {{text}}
        </div>
    </div>
</template>

<script>
import { gsap } from "gsap"

export default{
    name: "BottomAppear",
    props:{
        text: {
            default: "Default",
            type: String,
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
    },
    methods: {
        appear(){
            gsap.to(this.$refs.text, {
                y: 0,
                duration: 0.8,
                ease: "power1.out",
                onComplete: ()=>{this.$emit("loaded")}
            })
        }
    }
}
</script>

<style scoped>
.initial{
    transform: translateY(100%);
}
</style>