<template>
    <div class="fixed top-0 w-full h-full z-50 bg-secondary flex justify-center items-center">
        <div class="flex justify-center items-center flex-col">
            <img src="~/assets/images/logo_transparent.png" class="w-44"/>
            <svg
                class="progress-ring"
                width="300"
                height="300">
                <circle
                    class="progress-ring__circle"
                    stroke="yellow"
                    stroke-width="4"
                    fill="transparent"
                    r="70"
                    cx="150"
                    cy="150"/>
            </svg>
            
            <input
                value="50"
                type="number"
                step="5"
                min="0"
                max="100"
                placeholder="progress"
                class="absolute top-0"
            />
        </div>
    </div>
</template>

<script>

export default {
    name: "LoadingScreen",
    mounted(){

        var circle = document.querySelector('circle');
        var radius = circle.r.baseVal.value;
        var circumference = radius * 2 * Math.PI;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;

        function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = offset;
        }
        const input = document.querySelector('input');
        setProgress(input.value);

        input.addEventListener('change', function(e) {
            if (input.value < 101 && input.value > -1) {
                setProgress(input.value);
            }  
        })


    }
}
</script>

<style scoped>

.progress-ring__circle {
  transition: 0.35s stroke-dashoffset;
  transform: rotate(90deg);
  transform-origin: 50% 50%;
}

.progress-ring{
  position: absolute;
  top: 31%;
}

</style>