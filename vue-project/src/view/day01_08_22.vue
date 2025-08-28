<template>
    <!-- <HelloWorld /> -->
    <div class="page-view">
        <component :is="pages[activeComp0]"></component>
    </div>


</template>


<script setup>
import { ref } from 'vue';
import HelloWorld from '../vue_08_22/HelloWorld.vue';
const activeComp0 = ref('HelloWorld')
const pages = {
  HelloWorld,
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