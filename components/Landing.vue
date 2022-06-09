<template>
    <section class="bg-secondary h-[4000px] w-screen border-2 z-10" ref="main">
      <canvas ref="video" class="fixed h-full w-full brightness-75 object-cover"></canvas>
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
      <ArrowDown to="#about" class="relative top-[15%]" />
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
        frame: 0,
        canvas_width: 0,
        canvas_height: 0,
        loaded_image: 0
      }
    },
    methods: {
        appear(){
            this.$refs.first_text.appear()
        },
        video_loaded(percentage){
          this.$emit("percentage", percentage)
        },
        currentFrame(index){
          return `https://res.cloudinary.com/privacysaviorllc/image/upload/v1654711303/product-split/${(index + 1).toString().padStart(4, '0')}.png`
        },
        render() {
          this.context.clearRect(0, 0, this.canvas_width, this.canvas_height);
          this.context.drawImage(this.images[this.frame], 0, 0); 
        },
        resize_canvas(){
          console.log("Resizing")
          this.$refs.video.height = 1080
          this.$refs.video.width = 1920
          this.canvas_width = window.outerWidth
          this.canvas_height = window.outerHeight
        },
        on_resize(){
          this.resize_canvas()
          this.context = this.$refs.video.getContext("2d")
          this.render()
        }
    },
    watch:{
      loaded_image(value){
        this.video_loaded(value/this.frameCount)
      }
    },
    mounted(){
      this.resize_canvas()

      document.addEventListener("resize", this.on_resize)
      
      this.context = this.$refs.video.getContext("2d")
      for (let i = 0; i < this.frameCount; i++) {
        const img = new Image();
        img.src = this.currentFrame(i);
        this.images.push(img);
        this.images[i].onload = ()=> {this.loaded_image++}
      }

      this.images[0].onload = ()=> {
        this.loaded_image++
        this.render()
      };

      const slide = this.$gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.main,
          start: "top top",
          end: "bottom center",
          // markers: true,
          toggleActions: "play none reverse none",
          scrub: 1
        },
        onUpdate: this.render,
      });
      slide.to(this, {frame: this.frameCount - 1, snap: "frame" })
    }
}
</script>
