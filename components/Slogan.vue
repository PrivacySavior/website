<template>
    <div class="w-full p-10 text-5xl bg-primary flex justify-center items-center" ref="trigger">
        <h2 class="font-aileron text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1" ref="slidein">{{text}}</h2>
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
        }
    },
    mounted(){
        if (this.direction.toLowerCase()=="left"){
            this.$gsap.to(this.$refs.slidein, {
                duration: 0,
                x: - this.$refs.slidein.offsetWidth
            })
        }else {
            this.$gsap.to(this.$refs.slidein, {
                duration: 0,
                x:  this.$refs.slidein.offsetWidth
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
