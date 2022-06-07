<template>
    <div class="w-full p-10 text-5xl bg-primary flex justify-center items-center" ref="trigger">
        <h2 class="font-aileron text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1" ref="slidein" :style="{ fontFamily: font, fontSize: `${size}` }">{{text}}</h2>
    </div>
</template>

<script>
export default {
    name: "Slogan",
    props: {
        text: {
            required: false,
            default: "Slogan",
            type: String
        },
        direction: {
            required: false,
            default: "left",
            type: String
        },
        size: {
            default: "5rem",
            type: String,
            required: false
        },
        font: {
            default: "aileron",
            type: String,
            required: false
        },
    },
    mounted(){
        if (this.direction.toLowerCase()=="left"){
            this.$gsap.to(this.$refs.slidein, {
                duration: 0,
                x: -6 * this.$refs.slidein.offsetWidth/5
            })
        }else {
            this.$gsap.to(this.$refs.slidein, {
                duration: 0,
                x:  6 * this.$refs.slidein.offsetWidth/5
            })
        }
        const slide = this.$gsap.timeline({
            scrollTrigger: {
                trigger: this.$refs.trigger,
                start: "center bottom",
                scrub: true,
            }
        });
        slide.to(this.$refs.slidein, {x: 0})
  
    }
}
</script>
