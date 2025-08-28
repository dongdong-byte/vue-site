<template>
    
    <!-- <D4_for/>
    <D5_event/> -->
      <button @click="activeComp0 = 'D4_for'">for 이벤트 실행</button>
  <button @click="activeComp0 = 'D5_event'">event 이벤트 실행-1</button>

    <div class="page-view">
       <component :is="pages[activeComp0]"></component>
    </div>


</template>


<script setup>
import { ref } from 'vue';
import D4_for from '../vue_08_26/D4_for.vue';
import D5_event from '../vue_08_26/D5_event.vue';
const activeComp0 = ref('D4_for')
const pages = {
 D4_for,
 D5_event
};
</script>


<style scoped>
.page-view {
    margin: 20px;
    border: 4px dashed rgb(105, 64, 158);
    background-color: rgb(51, 138, 179);
    color: white;

}

button {
    margin: 10px;
    padding: 10px;
    font-size: 20px;
    background-color: rgb(108, 160, 29);
    color: white;
    border: 2px solid greenyellow;
    border-radius: 10px;
    cursor: pointer;
}
</style>