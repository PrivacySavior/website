<template>
  <div class="bg- w-full overflow-x-hidden scroll-smooth">
    <Fontloader />
    <LoadScreen
      v-if="!finished_loading"
      :percentage="percentage"
      @loaded="loaded"
      @final="final"
      ref="load"
    />
    <Navbar
      ref="nav"
      @loaded="()=>{this.landing = true}"
    />
    <Landing ref="land"/>
    <About />
    <Slogan text="Privacy. Customizability. Everywhere." size="6vmin"/>
    <Products />
    <Slogan text="The Guardian of your Privacy." direction="right" size="6vmin"/>
    <Faq />
    <Footer />
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
      landing: false
    };
  },
  components: {
    Navbar,
  },
  methods: {
    simulate_loading() {
      if (this.percentage != 100) {
        this.percentage += 5;
        console.log(this.percentage);
        setTimeout(this.simulate_loading, 100);
      }
    },

    loaded() {
      this.$refs.load.fade();
    },

    final() {
      this.finished_loading = true;
      this.$refs.nav.load();
    },
  },
  mounted() {
    this.simulate_loading();
  },
  watch: {
    landing(v){
      if (v) this.$refs.land.appear()
    }
  }
};
</script>
