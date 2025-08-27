<template>
    <section class="sect">
        <h2>예제: 범위 감시자</h2>
        <p> watcher는 'rangeVal' 값에 사용되어 20과 60 사이의 값은 선택할 수 없도록 합니다.</p>
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