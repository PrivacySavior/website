<template>
    <div class="fixed top-0 w-full h-full z-50 bg-secondary flex justify-center items-center transition-all" ref="loader">
        <div class="absolute w-full h-full top-0 left-0 flex justify-center items-center flex-col">
            <img src="~/assets/images/logo_transparent.png" class="w-44"/>
        </div>
        <div class="absolute w-full h-full top-0 left-0 flex justify-center items-center flex-col">
            <svg
                class="progress-ring"
                width="144"
                height="144">
                <circle
                    class="progress-ring__circle"
                    stroke="#d1a00d"
                    stroke-width="4"
                    fill="transparent"
                    r="70"
                    cx="72"
                    cy="72"/>
            </svg>
            
        </div>
    </div>
</template>

<script>

import { gsap } from "gsap"

export default {
    name: "LoadingScreen",
    props: {
        percentage: Number
    },
    data(){
        return {
            circle: null,
            radius: null,
            circumference: null,
        }
    },
    methods: {

        setProgress(percent) {
            const offset = this.circumference - percent / 100 * this.circumference;
            this.circle.style.strokeDashoffset = offset;
        },
        fade(){
            gsap.to(this.$refs.loader,{
                autoAlpha: 0,
                duration: 0.7,
                ease: "power.in",
                onComplete: ()=>{
                    this.$emit("final")
                }
            })
        }

    },
    mounted(){

        this.circle = document.querySelector('circle');
        this.radius = this.circle.r.baseVal.value;
        this.circumference = this.radius * 2 * Math.PI;

        this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
        this.circle.style.strokeDashoffset = `${this.circumference}`;

    },
    watch: {
        percentage(percent){
            if (percent == 100) this.$emit("loaded")
            if (percent < 101 && percent > -1) {
                this.setProgress(percent);
            } 
        }
    }
}
</script>

<style scoped>

.progress-ring__circle {
  transition: 0.35s stroke-dashoffset;
  transform: rotate(90deg);
  transform-origin: 50% 50%;
}



</style>