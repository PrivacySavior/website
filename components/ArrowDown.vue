<template>
    <nuxt-link :to="to" class="animate-bounce flex justify-center flex-col items-center">
        <div class="w-10 h-10 border-r-4 border-b-4 rotate-45 border-accent3"></div>
        <div class="w-8 h-8 border-r-4 border-b-4 rotate-45 border-accent3"></div>
    </nuxt-link>
</template>

<script>
export default {
    name: "ArrowDown",
    props: {
        to: {
            default: "/",
            require: false,
            type: String
        }
    }
}
</script>
