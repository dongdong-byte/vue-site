<script setup>
import { ref } from 'vue';
import Ex1_bind from './components/Ex1_bind.vue';
import Ex2_if from './components/Ex2_if.vue';
import Ex3_show from './components/Ex3_show.vue';
import Ex4_for from './components/Ex4_for.vue';

import Ex4_for_1 from './components/Ex4_for_1.vue';
import D1_event from './components/D1_event.vue';
import D2_method from './components/D2_method.vue';
import D1_event1 from './components/D1_event1.vue';
import D3_model from './components/D3_model.vue';
import D3_model1 from './components/D3_model1.vue';
import D4_watcher from './components/D4_watcher.vue';
const activeComponent = ref('Ex1_bind');
const pages = {
  Ex1_bind,
  Ex2_if,
  Ex3_show,
  Ex4_for,
  Ex4_for_1,
  D1_event,
  D1_event1,
  D2_method,
  D3_model,
  D3_model1,
  D4_watcher
};

</script>

<template>
  <!-- <Ex1_bind /> -->
  <!-- <Ex2_if />
  <Ex3_show />
  <Ex4_for />  -->
  <!-- <Ex4_for_1/>
 <D1_event/>
<D1_event1/>
<D2_method/>
<D3_model/>
<D3_model1/>
<D4_watcher/> -->
  <button @click="activeComponent = 'D1_event1'">event 함수1</button>
  <button @click="activeComponent = 'D2_method'">method 함수</button>
  <button @click="activeComponent = 'D3_model'">model 함수</button>
  <button @click="activeComponent = 'D3_model1'">model 함수-1</button>
  <button @click="activeComponent = 'D4_watcher'">watcher 함수</button>

  <button @click="activeComponent = 'D1_event'">event 함수</button>
  <button @click="activeComponent = 'Ex1_bind'">bind_바인드</button>
  <button @click="activeComponent = 'Ex2_if'">if_이프</button>
  <button @click="activeComponent = 'Ex3_show'">Show_쇼우</button>
  <button @click="activeComponent = 'Ex4_for'">for_포</button>
  <button @click="activeComponent = 'Ex4_for_1'">for_포-1</button>
  <div id="comp_view">
    <keep-alive>
      <component :is="pages[activeComponent]"></component>
    </keep-alive>
  </div>
</template>

<style scoped>
button {
  margin: 5px;
  filter: drop-shadow(0 0 3px rgba(165, 13, 13, 0.5));
}

#comp_view {
  border: 1px solid orange;
  margin-top: 20px;
  border-radius: 10px;
  filter: drop-shadow(1 1 1px rgba(11, 101, 204, 0.5));

}
</style>
