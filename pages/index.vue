<template>
  <div class="bg- w-full overflow-x-hidden scroll-smooth" ref="content">
    <Fontloader />
    <LoadScreen
      v-if="!finished_loading"
      :percentage="percentage"
      @100percent="loaded"
      @final="final"
      ref="load"
    />
    <Navbar
      ref="nav"
      @loaded="()=>{this.landing = true}"
    />
    <Landing ref="land" @percentage="unload"/>
    <div class="relative bg-secondary z-20">
      <About/>
      <Slogan text="Privacy. Customizability. Everywhere." size="6vmin"/>
      <Products />
      <Slogan text="The Guardian of your Privacy." direction="right" size="6vmin"/>
      <Faq />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Narvbar.vue";

export default {
  name: "IndexPage",
  head() {
    return {
      title: "PrivacySavior",
    };
  },
  data() {
    return {
      percentage: 0,
      finished_loading: false,
      landing: false,
      total_tasks: 1,
    };
  },
  components: {
    Navbar,
  },
  methods: {
    loaded() {
      this.$refs.load.fade();
    },
    final() {
      this.finished_loading = true;
      this.$refs.nav.load();
    },
    unload(percentage){
      if (percentage >= 1) this.final()
    }
  },
  mounted() {

  },
  watch: {
    landing(v){
      if (v) this.$refs.land.appear()
    }
  }
};
</script>
