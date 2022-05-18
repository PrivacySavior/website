<template>
  <div class="bg- w-full overflow-x-hidden scroll-smooth">
    <Fontloader/>
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
          <div class="flex justify-center relative top-10">
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
      <ArrowDown to="#about" class="relative top-96" />
    </section>
    <div id="about"/>
    <section ref="About" id="about" class="min-h-[100vh] w-full h-full bg-primary flex items-center justify-evenly flex-wrap">
        
      <div class="basis-0 grow p-4">
        <div>
          <BottomAppear 
            :tailwind="'text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1'"
            :text="'ABOUT'" 
            :size="75"
            :onload="true"
            :font="'aileron'"
          />
        </div>

        <p class="text-white font-montserrat">
          Imagine you are working on some confidential information and someone walks in on you. This is definitely not what you want.
          <br>
          It is time to stop being the victim, as PrivacySavior will solve all your problems.
          <br>
          <br>
          Simply attatch a PrivacySavior sensor to your door, choose the confidential files or applications you want to protect.
          The next time someone walks in on you, all your confidential information will minimize and close on your computer!

          <br><br>
          Don't have a door? Don't worry, more PrivacySavior sensors are in development (e.g. Laser Sensors, Vibration Sensors and more.).
        </p>
      </div>

      <div class="w-1/2 min-w-[30rem] p-4">
        <video loop muted autoplay controls>
          <source src="~/assets/video/privacy.mp4" type="video/mp4">
        </video>
      </div>

    </section>
    <Footer/>
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
