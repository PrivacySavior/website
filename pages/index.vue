<template>
  <div class="bg-secondary h-screen w-screen">
    <LoadScreen v-if="!finished_loading" :percentage="percentage" @loaded="loaded" @final="final" ref="load"/>
    <Navbar ref="nav"/>
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
  data(){
    return {
      percentage: 0,
      finished_loading: false
    }
  },
  components:{
    Navbar,
  },
  methods: {

    simulate_loading() {
      if (this.percentage != 100){
        this.percentage+=5
        console.log(this.percentage)
        setTimeout(this.simulate_loading, 100)
      }
    },

    loaded(){
      this.$refs.load.fade()
    },

    final(){
      this.finished_loading = true
      this.$refs.nav.load()
    }

  },
  mounted(){
    this.simulate_loading()
  }
}
</script>
