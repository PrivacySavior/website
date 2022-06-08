<template>
    <section class="bg-secondary h-screen w-screen" ref="Main">
      <canvas ref="video" class="absolute h-full w-full brightness-75 object-cover"></canvas>
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
    data(){
      return {
        frameCount: 70,
        images: [],
        context: null,
        frame: 0
      }
    },
    methods: {
        appear(){
            this.$refs.first_text.appear()
        },
        video_loaded(){
          this.$emit("loaded")
        },
        currentFrame(index){
          return `https://res.cloudinary.com/privacysaviorllc/image/upload/v1654711303/product-split/${(index + 1).toString().padStart(4, '0')}.png`
        },
        render() {
          this.context.clearRect(0, 0, this.$refs.video.width, this.$refs.video.height);
          this.context.drawImage(this.images[this.frame], 0, 0); 
        },
        resize_canvas(){
          this.$refs.video.height = window.outerHeight
          this.$refs.video.width = window.outerWidth
        }
    },
    mounted(){
      this.resize_canvas()
      window.addEventListener("resize", this.resize_canvas)
      this.video_loaded()
      this.context = this.$refs.video.getContext("2d")
      for (let i = 0; i < this.frameCount; i++) {
        const img = new Image();
        img.src = this.currentFrame(i);
        this.images.push(img);
      }
      this.images[0].onload = this.render;
    }
}
</script>
