<template>
  <section
    ref="Products"
    id="products"
    class="
      p-20
      w-full
      h-full
      bg-primary
      flex
      items-center
      justify-evenly
      flex-wrap
    "
  >

    <div class="w-1/2 min-w-[30rem] p-4" ref="media">
      <img src="~/assets/images/product.png"/>
    </div>
    
    <div class="basis-0 grow p-4" ref="description">
      <div class="basis-0 grow p-4">
      <div>
        <BottomAppear
          :tailwind="'text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1'"
          :text="'PRODUCT'"
          size="5rem"
          :onload="true"
          :font="'aileron'"
        />
      </div>

      <p class="text-white font-montserrat">
        Currently, our product is still in the development process.
        <br/><br/>
        However, it will not be long until we start manufacturing our product.
        If you are interested, please pre-order our products on kickstarter.
      </p>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Products",
  mounted(){
    this.$gsap.to(this.$refs.description,{
      x: - this.$refs.description.offsetWidth/4,
      autoAlpha: 0,
      duration: 0
    })

    this.$gsap.to(this.$refs.description,{
      scrollTrigger: this.$refs.description,
      x: 0,
      autoAlpha: 1,
      duration: 2
    })

    this.$gsap.to(this.$refs.media,{
      x: this.$refs.description.offsetWidth/4,
      autoAlpha: 0,
      duration: 0
    })

    this.$gsap.to(this.$refs.media,{
      scrollTrigger: this.$refs.media,
      x: 0,
      autoAlpha: 1,
      duration: 2
    })
  }
};
</script>
