<template>
    <div>
        <Fontloader/>
        <div>
            <div class="h-20 w-full bg-jet-black font-beau-rivage flex justify-center items-center">
                <div class="w-full h-full text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-dark-gold to-light-gold flex justify-center items-center">
                    PrivacySavior
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import Fontloader from "../components/Fontloader.vue"

export default {
    name: "Navbar",
    components:{
        Fontloader
    }
}
</script>
