<template>
    <div class="w-full p-10 text-5xl bg-primary flex justify-center items-center">
        <h2 class="font-aileron text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1">{{text}}</h2>
    </div>
</template>

<script>
export default {
    name: "Slogan",
    props: {
        text: {
            required: false,
            default: "Slogan",
            type: String
        }
    }
}
</script>
