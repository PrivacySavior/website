<template>
    <footer id="footer">
        <div class="w-full h-1 bg-gradient-to-br from-accent2 to-accent1"></div>
        <div class="bg-secondary">
            <div class="footer min-h-[300px]">
                <div>
                    <div class="flex justify-center items-center">
                        <img src="~assets/images/logo_transparent.png" class="w-24 relative bottom-1"/>
                        <h2 class="font-aileron leading-normal text-4xl text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 relative right-6">PrivacySavior</h2>
                    </div>
                    <div>
                        <h3 class="text-center relative top-[-1rem] text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1">Privacy, Customizability, Evewhere</h3>
                    </div>
                    <div class="info">
                        <h3 class="text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1">Patent Pending</h3>
                        <h3 class="text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1">Limited Liability Company</h3>
                        <a href="mailto:info@privacysavior.com" class="text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1">info@privacysavior.com</a>
                    </div>
                </div>
                <div class="p-10">
                    <ul class="text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1">
                        <li class="list-none"><nuxt-link :to="{ path: '/',hash:'#about'}">About</nuxt-link></li>
                        <li class="list-none"><nuxt-link :to="{ path: '/',hash:'#footer'}">Contacts</nuxt-link></li>
                        <li class="list-none"><nuxt-link :to="{ path: '/',hash:'#faq'}">FAQS</nuxt-link></li>
                        <li class="list-none"><nuxt-link :to="{ path: '/',hash:'#products'}">Products</nuxt-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.footer{
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;
}

.info{
    text-align: left;
    position: relative;
    left: 7%;
}

@media (max-width:900px) {
    .footer{
        flex-direction: column;
    }
    .info{
        text-align: center;
        left: 0%;
    }
}
</style>
