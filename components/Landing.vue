<template>
    <section class="bg-secondary h-screen w-screen" ref="Main">
      <video src="~/assets/video/product.mp4" muted autoplay loop class="absolute h-screen w-screen brightness-75 object-cover"></video>
      <div class="relative top-64 flex justify-around items-center">
        <div>
          <LeftAppear
            class=""
            @loaded="
              () => {
                this.$refs.second_text.appear();
              }
            "
            size="10vmin"
            :text="'PrivacySavior'"
            :tailwind="'text-center text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1'"
            :font="'aileron'"
            ref="first_text"
          />
          <BottomAppear
            size="5vmin"
            :text="'the Guardian of your Privacy.'"
            :tailwind="'text-center text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1'"
            :font="'fenix'"
            ref="second_text"
          />
        </div>
      </div>
      <ArrowDown to="#about" class="relative top-[60%]" />
    </section>
</template>

<script>
export default {
    name: "Landing",
    methods: {
        appear(){
            this.$refs.first_text.appear()
        }
    }
}
</script>
