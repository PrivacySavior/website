<template>
  <section
    ref="About"
    id="about"
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
          :text="'ABOUT'"
          :size="75"
          :onload="true"
          :font="'aileron'"
        />
      </div>

      <p class="text-white font-montserrat">
        Imagine you are working on some confidential information and someone
        walks in on you. This is definitely not what you want.
        <br />
        It is time to stop being the victim, as PrivacySavior will solve all
        your problems.
        <br />
        <br />
        Simply attatch a PrivacySavior sensor to your door, choose the
        confidential files or applications you want to protect. The next time
        someone walks in on you, all your confidential information will minimize
        and close on your computer!

        <br /><br />
        Don't have a door? Don't worry, the second generation of PrivacySavior
        sensors are currently in development, such as laser and facial
        recognition sensors.
      </p>
    </div>

    <div class="w-1/2 min-w-[30rem] p-4">
      <video loop muted autoplay controls>
        <source src="~/assets/video/privacy.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>
