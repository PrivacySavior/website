<template>
    <footer id="footer">
        <div class="w-full h-1 bg-gradient-to-br from-accent2 to-accent1"></div>
        <div class="bg-secondary footer-container">
            <div class="footer min-h-[300px] pl-12">
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
                    <h2 class="text-[1.2rem] text-accent3 underline">Resources</h2>
                    <ul class="text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1">
                        <li class="list-none"><nuxt-link :to="{ path: '/',hash:'#about'}">About</nuxt-link></li>
                        <li class="list-none"><nuxt-link :to="{ path: '/',hash:'#footer'}">Contacts</nuxt-link></li>
                        <li class="list-none"><nuxt-link :to="{ path: '/',hash:'#faq'}">FAQS</nuxt-link></li>
                        <li class="list-none"><nuxt-link :to="{ path: '/',hash:'#products'}">Products</nuxt-link></li>
                    </ul>
                </div>
            </div>
            <div class="text-white p-10 flex justify-center items-center flex-col">
                <h2 class="text-[1.5rem] font-montserrat ">Stay up to date with PrivacySavior products.</h2>
                <div class="w-full flex justify-center flex-col">
                    <TextInput ref="input" placeholder="Enter your email address"/>
                    <Button @click="signup" class="mt-4" text="Sign Up" size="1.2rem" font="fenix" tailwind="bg-gradient-to-br from-accent2 to-accent1"/>
                    <div class="message_color" ref="status">{{error_message}}</div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data(){
        return {
            error_message: "",
        }
    },
    methods:{
        async signup(){
            let email = this.$refs.input.get_value()
            this.$refs.input.clear_value()
            this.$axios.post("https://data.mongodb-api.com/app/emailcollection-qhing/endpoint/add_email", { 
                email: email
            }).then(()=>{
                this.$refs.status.classList.remove("error")
                this.$refs.status.classList.add("success")
                this.error_message = "You will now receive the latest updates!"
            }).catch((error)=>{
                this.$refs.status.classList.remove("success")
                this.$refs.status.classList.add("error")
                this.error_message = error.response.data
            })
            
          
        }
    },
    mounted(){

    }
}
</script>

<style scoped>
.footer{
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;
}

.footer-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.info{
    text-align: left;
    position: relative;
    left: 7%;
}
.success{
    color: rgb(0, 185, 0);
}
.error{
    color: rgb(224, 81, 29);
}

@media (max-width:980px) {
    .footer-container{
        flex-direction: column;
    }
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
