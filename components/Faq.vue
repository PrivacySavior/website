<template>
  <section
    ref="Faq"
    id="faq"
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
    <div class="basis-0 grow p-4">
      <div>
        <BottomAppear
          :tailwind="'text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1'"
          :text="'FAQS'"
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
  name: "Faq",
};
</script>


