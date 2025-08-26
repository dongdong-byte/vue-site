<script setup>
import Ex1_bind from './components/Ex1_bind.vue';
import Ex2_if from './components/Ex2_if.vue';
import Ex3_show from './components/Ex3_show.vue';
import Ex4_for from './components/Ex4_for.vue';
import { ref } from 'vue';
import Ex4_for_1 from './components/Ex4_for_1.vue';
const activeComponent = ref('Ex1_bind');
const pages = {
  Ex1_bind,
  Ex2_if,
  Ex3_show,
  Ex4_for,
  Ex4_for_1
};
</script>

<template>
  <!-- <Ex1_bind /> -->
  <!-- <Ex2_if />
  <Ex3_show />
  <Ex4_for /> -->
  <!-- <Ex4_for_1/> -->

  
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
button{
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
