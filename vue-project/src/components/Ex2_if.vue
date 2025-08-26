<template>
    <section class="container">
        <h2>v-if 예시</h2>
        <p v-if="typewriterInstock > 0">재고 있음</p>
        <p v-else>재고 없음</p>
        <input type="text" @input="validateNumberInput" v-model="typewriterInstock" placeholder="숫자를 입력하세요." />
    </section>
    <br><br><br>

    <section class="container">
        <h2>v-if ,v-else-if,v-else</h2>
        <p>10이상: 재고 많이 잇음 10-0개 별로 없음 0개 : 재고 없음</p>
        <p v-if="typewriterCount1 > 10">재고 많이 있음</p>
        <p v-else-if="typewriterCount1 > 0">별로 없음</p>
        <p v-else>재고 없음</p>
        <input type="text" @input="validateNumberInput" v-model="typewriterCount1" placeholder="숫자를 입력하세요." />
    </section>


</template>

<script setup>
import { ref, watch } from "vue";
const typewriterInstock = ref(0);
const typewriterCount1 = ref(0);

const validateNumberInput = (event) => {
    const value = event.target.value;
    // /^\d*$/
    // ^: 문자열 시작
    // $: 문자열 끝
    // \d*는 숫자(0~9)가 0개 이상 반복되는 것을 의미합니다.
    // !
    // 만약 숫자가 아닌 문자가 하나라도 있으면 조건문이 true가 됩니다.
    if (!/^\d*$/.test(value)) {
        // value.replace(/[^\d]/g, "")
        // [^\d]는 숫자가 아닌 모든 문자에 매칭됩니다.
        // g 플래그는 전체 문자열에서 해당되는 모든 부분을 찾습니다.
        // ""로 대체하므로, 숫자가 아닌 모든 문자가 제거됩니다
        event.target.value = value.replace(/[^\d]/g, "");
    }
};

</script>

<style  scoped>
.container{
    border: 2px dashed blue;
}


</style>