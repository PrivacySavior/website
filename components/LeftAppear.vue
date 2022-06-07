<template>
    <div class="overflow-y-hidden" ref="appear">    
        <div :class="`${tailwind} initial`" :style="{ fontFamily: font, fontSize: `${size}` }" ref="text">
            {{text}}
        </div>
    </div>
</template>

<script>

export default{
    name: "LeftAppear",
    props:{
        text: {
            default: "Default",
            type: String,
            required: false
        },
        size: {
            default: "5rem",
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
        },
        onload: {
            default: false,
            type: Boolean,
            required: false
        }
    },
    methods: {
        appear(){
            this.$gsap.to(this.$refs.text, {
                x: 0,
                duration: 0.8,
                ease: "power1.out",
                onComplete: ()=>{this.$emit("loaded")}
            })
        },
        isInViewport() {
            const rect = this.$refs.appear.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );
        },
        scrollAppear() {
            if (this.isInViewport()){
                this.appear()
                console.log("Appeared")
                document.removeEventListener("scroll", this.scrollAppear)
            }
        }
    },
    mounted(){
        if (this.onload){
            document.addEventListener("scroll",this.scrollAppear)
            console.log("added")
            this.scrollAppear()
        }
    }
}
</script>

<style scoped>
.initial{
    transform: translateX(-100%);
}
</style>