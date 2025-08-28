<template>
    <hr>
    <p v-if="typewritersInStock">재고 있음</p>
    <!-- v-else는 조건문이 필요 없다 -->
    <p v-else>재고 없음</p>
    <hr>
    <p v-if="typewriterCount >0">재고 있음</p>
    <p v-else>재고 없음</p>
    <hr>
    <p v-if="typewriterCount1 > 5">재고 많이 있음</p>
    <p v-else-if="typewriterCount1 > 0">별로 없음</p>
    <p v-else>재고 없음</p>
    <hr>
    <p v-if="text.includes('pizza')"> "pizza "글자가 포함되어 있다</p>
    <p v-else> "pizza "글자가 포함되어 있지 않다.</p>
    <hr>
    <!-- 태그 2개 이상 쌀거면 div태그를 사용해라 -->
    <div v-if="text2.includes('피자')">
        <p>피자</p>
        <img src="../assets/img_pizza.svg" alt="">
    </div>


</template>

<script setup>
import { ref } from "vue";
const typewritersInStock = ref(true);
const typewriterCount = ref(0);
const typewriterCount1 = ref(3);
const text = ref("I like taco, pizza, Thai beef salad, pho soup and tagine.");
const text2 = ref("I like taco, 피자pizza, Thai beef salad, pho soup and tagine.");

</script>

<style  scoped>
img{
    width: 100px;
    height: 60px;
}
</style>