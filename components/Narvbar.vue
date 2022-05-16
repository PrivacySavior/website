<template>
    <div class="initial absolute w-screen z-20" ref="menu">
        <div class="mobile-menu" ref="navmenu">
            <NuxtLink class="pl-5 pr-5 font-athene leading-normal text-1xl text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 relative right-6" :to="about">ABOUT</NuxtLink>
            <NuxtLink class="pl-5 pr-5 font-athene leading-normal text-1xl text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 relative right-6" :to="products">PRODUCTS</NuxtLink>
            <div class="flex justify-center items-center">
                <img src="~assets/images/logo_transparent.png" class="w-24 relative bottom-1"/>
                <h2 class="font-athene leading-normal text-4xl text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 relative right-6">PrivacySavior</h2>
            </div>
            <NuxtLink class="pl-5 pr-5 font-athene leading-normal text-1xl text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 relative right-6" :to="demonstration">DEMONSTRATION</NuxtLink>
            <NuxtLink class="pl-5 pr-5 font-athene leading-normal text-1xl text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 relative right-6" :to="faq">FAQ</NuxtLink>
            <div @click="hamburger" class="hamburger-button font-white text-5xl space-y-2" ref="hamburger">
                <div class="w-10 h-1 rounded-full bg-gradient-to-br from-accent2 to-accent1" ref="buntop"/>
                <div class="w-10 h-1 rounded-full bg-gradient-to-br from-accent2 to-accent1" ref="patty"/>
                <div class="w-10 h-1 rounded-full bg-gradient-to-br from-accent2 to-accent1" ref="bunbottom"/>
            </div>
        </div>
        <div class="w-screen h-1 bg-gradient-to-br from-accent2 to-accent1"></div>
        <div class="w-screen h-0 bg-primary flex justify-center flex-col items-center overflow-y-hidden" ref="selection">
            <li @click="hamburger" class="list-none mb-5"><NuxtLink class="text-2xl font-athene leading-normal text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 relative right-6" :to="about">ABOUT</NuxtLink></li>
            <li @click="hamburger" class="list-none mb-5"><NuxtLink class="text-2xl font-athene leading-normal text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 relative right-6" :to="products">PRODUCTS</NuxtLink></li>
            <li @click="hamburger" class="list-none mb-5"><NuxtLink class="text-2xl font-athene leading-normal text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 relative right-6" :to="demonstration">DEMONSTRATION</NuxtLink></li>
            <li @click="hamburger" class="list-none mb-5"><NuxtLink class="text-2xl font-athene leading-normal text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 relative right-6" :to="faq">FAQ</NuxtLink></li>
        </div>
    </div>
</template>

<script>
import { gsap } from "gsap"

export default {
    name: "Navbar",
    data(){
        return {
            clicked: false,
            about: "#about",
            demonstration: "#demonstration",
            products: "#products",
            faq: "#faq"
        }
    },
    methods: {
        load(){
            gsap.to(this.$refs.menu,{
                y:this.$refs.menu.offsetHeight,
                duration: 0.5,
                ease: "power1.out",
                onComplete: ()=>{this.$emit("loaded")}
            })
        },
        enable_scroll(){
            document.documentElement.style.overflow = 'auto';  // firefox, chrome
            document.body.scroll = "yes"; // ie only
        },
        disable_scroll(){
            document.documentElement.style.overflow = 'hidden';  // firefox, chrome
            document.body.scroll = "no"; // ie only
        },
        hamburger(){
            let top = gsap.timeline()
            let middle = gsap.timeline()
            let bottom = gsap.timeline()
            if (!this.clicked) {
                top.to(this.$refs.buntop,{
                    y: 12,
                    duration: 0.1,
                    ease: "power1.in"
                })
                middle.to(this.$refs.patty,{
                    rotate: 45,
                    duration: 0.1,
                    delay: 0.1,
                    ease: "power1.in"
                })
                bottom.to(this.$refs.bunbottom,{
                    y: -12,
                    duration: 0.1,
                    ease: "power1.in"
                })
                top.to(this.$refs.buntop,{
                    rotate: 45,
                    duration: 0.1,
                    ease: "power1.in"
                })
                bottom.to(this.$refs.bunbottom,{
                    rotate: -45,
                    duration: 0.1,
                    ease: "power1.in"
                })
                this.disable_scroll()
                gsap.to(this.$refs.selection,{
                    height: window.innerHeight - this.$refs.navmenu.offsetHeight,
                    duration: 0.5,
                    ease: "bounce.out"
                })
            }else{
                top.to(this.$refs.buntop,{
                    rotate: 0,
                    duration: 0.1,
                    ease: "power1.in"
                })
                middle.to(this.$refs.patty,{
                    rotate: 0,
                    duration: 0.1,
                    delay: 0.1,
                    ease: "power1.in"
                })
                bottom.to(this.$refs.bunbottom,{
                    rotate: 0,
                    duration: 0.1,
                    ease: "power1.in"
                })
                top.to(this.$refs.buntop,{
                    y: 0,
                    duration: 0.1,
                    ease: "power1.in"
                })
                bottom.to(this.$refs.bunbottom,{
                    y: 0,
                    duration: 0.1,
                    ease: "power1.in"
                })
                gsap.to(this.$refs.selection,{
                    height: 0,
                    duration: 0.5,
                    ease: "bounce.in",
                    onComplete: ()=>{
                        this.enable_scroll()
                    }
                })

            }
            this.clicked = !this.clicked
        },
        on_change(){

        }
    },
    mounted(){
        window.addEventListener("resize", ()=>{
            if (window.outerWidth > 800 && this.clicked){
                let top = gsap.timeline()
                let middle = gsap.timeline()
                let bottom = gsap.timeline()
                top.to(this.$refs.buntop,{
                    rotate: 0,
                    duration: 0.1,
                    ease: "power1.in"
                })
                middle.to(this.$refs.patty,{
                    rotate: 0,
                    duration: 0.1,
                    delay: 0.1,
                    ease: "power1.in"
                })
                bottom.to(this.$refs.bunbottom,{
                    rotate: 0,
                    duration: 0.1,
                    ease: "power1.in"
                })
                top.to(this.$refs.buntop,{
                    y: 0,
                    duration: 0.1,
                    ease: "power1.in"
                })
                bottom.to(this.$refs.bunbottom,{
                    y: 0,
                    duration: 0.1,
                    ease: "power1.in"
                })
                gsap.to(this.$refs.selection,{
                    height: 0,
                    duration: 0.5,
                    ease: "bounce.in",
                    onComplete: ()=>{
                        this.enable_scroll()
                    }
                })
            }
        })
    }
}
</script>

<style scoped>
.initial{
    top: -10%
}

.mobile-menu{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.hamburger-button{
    display: none;
}

@media (max-width:900px){

    .mobile-menu > a{
        display: none;
        justify-content: space-between;
    }

    .hamburger-button{
        display: block;
    }
}   

</style>