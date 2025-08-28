<script setup>
import { ref } from 'vue'
import D1_event from '../vue_08_27/D1_event.vue';
import D1_event1 from '../vue_08_27/D1_event1.vue';
import D2_method from '../vue_08_27/D2_method.vue';
import D3_model from '../vue_08_27/D3_model.vue';
import D3_model1 from '../vue_08_27/D3_model1.vue';
import D4_watcher from '../vue_08_27/D4_watcher.vue';
const pages = {  D1_event, D2_method, D3_model, D1_event1, D3_model1, D4_watcher }
const activeComp0 = ref('D1_event1')
</script>

<template>
  <!-- <D1_event />
  <D1_event1 />
  <D2_method />
  <D3_model />
  <D3_model1 />
  <D4_watcher /> -->

  <!-- 버튼 클릭시 보여줄 컴포넌트 -->
  <button @click="activeComp0 = 'D1_event'">v-on 이벤트 실행</button>
  <button @click="activeComp0 = 'D1_event1'">v-on 이벤트 실행-1</button>
  <button @click="activeComp0 = 'D2_method'">v-method 실행</button>
  <button @click="activeComp0 = 'D3_model'">v-model 실행</button>
  <button @click="activeComp0 = 'D3_model1'">v-model 실행-1</button>

  <button @click="activeComp0 = 'D4_watcher'">watcher 실행</button>
  <div class="page-view">
    <component :is="pages[activeComp0]"></component>
  </div>
</template>

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
