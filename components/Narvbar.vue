<template>
    <div class="initial absolute w-screen z-20" ref="menu">
        <div class="flex justify-around items-center">
            <NuxtLink class="pl-5 pr-5 font-athene leading-normal text-1xl text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 relative right-6" to="/">ABOUT</NuxtLink>
            <NuxtLink class="pl-5 pr-5 font-athene leading-normal text-1xl text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 relative right-6" to="/">PRODUCTS</NuxtLink>
            <div class="flex justify-center items-center">
                <img src="~assets/images/logo_transparent.png" class="w-24 relative bottom-1"/>
                <h2 class="font-athene leading-normal text-4xl text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 relative right-6">PrivacySavior</h2>
            </div>
            <NuxtLink class="pl-5 pr-5 font-athene leading-normal text-1xl text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 relative right-6" to="/">DEMONSTRATION</NuxtLink>
            <NuxtLink class="pl-5 pr-5 font-athene leading-normal text-1xl text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 relative right-6" to="/">FAQ</NuxtLink>
        </div>
        <div class="w-screen h-1 bg-gradient-to-br from-accent2 to-accent1"></div>
    </div>
</template>

<script>
import { gsap } from "gsap"

export default {
    name: "Navbar",
    methods: {
        load(){
            gsap.to(this.$refs.menu,{
                y:this.$refs.menu.offsetHeight,
                duration: 0.5,
                ease: "power1.out"
            })
        }
    }
}
</script>

<style scoped>
.initial{
    top: -10%
}
</style>