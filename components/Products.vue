<template>
  <section
    ref="Products"
    id="products"
    class="
      min-h-[100vh]
      w-full
      h-full
      bg-primary
      flex
      items-center
      justify-evenly
      flex-wrap
    "
  >
    <div class="basis-0 grow p-4">
      <div>
        <BottomAppear
          :tailwind="'text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1'"
          :text="'PRODUCTS'"
          :size="75"
          :onload="true"
          :font="'aileron'"
        />
      </div>

      <p class="text-white font-montserrat text-5xl">Coming soon.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Products",
};
</script>
