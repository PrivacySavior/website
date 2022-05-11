<template>
  <div class="bg-secondary h-screen w-screen">
    <LoadScreen/>
    <Navbar/>
  </div>
</template>

<script>
import Navbar from "../components/Narvbar.vue"
export default {
  name: 'IndexPage',
  head(){
    return{
      title: "PrivacySavior"
    }
  },
  components:{
    Navbar,
  }
}
</script>
