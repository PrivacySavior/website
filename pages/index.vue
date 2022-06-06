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
      @loaded="
        () => {
          this.$refs.first_text.appear();
        }
      "
    />
    <section class="bg-secondary h-screen" ref="Main">
      <div class="relative top-64 flex justify-around items-center">
        <div>
          <LeftAppear
            class=""
            @loaded="
              () => {
                this.$refs.second_text.appear();
              }
            "
            :size="60"
            :text="'PrivacySavior'"
            :tailwind="'text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1'"
            :font="'montserrat'"
            ref="first_text"
          />
          <BottomAppear
            :size="50"
            :text="'the Guardian of your Privacy.'"
            :tailwind="'text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1'"
            :font="'montserrat'"
            ref="second_text"
          />
          <div class="flex justify-center relative top-32">
            <Button
              :tailwind="'bg-gradient-to-br from-accent2 to-accent1'"
              :text="'Learn More'"
              :size="25"
            />
          </div>
        </div>
        <div>
          <img class="w-80" src="~/assets/images/3dbox.png" />
        </div>
      </div>
      <ArrowDown to="#about" class="relative top-[50%]" />
    </section>
    <About />
    <Slogan text="Privacy, Customizability, Everywhere"/>
    <Products />
    <Slogan text="The Guardian of your Privacy." direction="right"/>
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
};
</script>
