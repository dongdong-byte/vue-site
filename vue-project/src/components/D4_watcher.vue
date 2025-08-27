<template>
    <section class="sect">
        <h2>Example: Range Watcher</h2>
        <p> watcher is used for the 'rangeVal' value so that values between 20 and 60 are not possible to choose.</p>
        <input v-model="rangeVal" type="range" min="0" max="100" step="5">
        <p>{{ rangeVal }}</p>

    </section>
</template>

<script setup>
import { ref, watch } from 'vue';
const rangeVal = ref(0);
// watch(감시할변수 ,(구현부))
watch(rangeVal, (val) => {
    if (val > 20 && val < 60) {
        // 20보다 작으면 20으로, 40보다 크면 60으로 설정
        // val이 40보다 작으면
        if (val < 40) {
            // 20으로 설정
            rangeVal.value = 20;
        } else {
            rangeVal.value = 60;
        }
    }
})



</script>

<style scoped>
.sect{
    border: 1px solid black;
    padding: 10px;
    text-align: center;

}

</style>