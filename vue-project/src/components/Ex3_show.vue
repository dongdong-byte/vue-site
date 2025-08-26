<template>
    <div>
        <div class="container">
            <h2>v-show예시</h2>
            <p>true면 보이고 flase면 감춰진다</p>
            <div v-show="showDiv">이 엘리먼트는 감출수 있어요 </div>
            <div v-if ="showDiv">이 엘리먼트는 조건부로 랜더링 합니다.</div>
        </div>
        <p>
            Set the 'showDiv' data property to 'false', and run the code again. Right click this green p element, choose
            'Inspect' or 'Inspect element' and you can see that the div element with v-show still exist, it is only the
            CSS
            display property that is set to 'none', and the div with v-if is destroyed
        </p>
        <button @click="showDiv = !showDiv">true?, false?</button>
        <p>{{ showDiv }}</p>
    </div>

</template>

<script setup>
import { ref } from "vue";
const showDiv = ref(true);


</script>

<style  scoped>
.container{
    border: 1px dashed blue;
    padding: 10px;
}

</style>