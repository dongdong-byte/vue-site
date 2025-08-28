<template>
    <!-- <D1_bind/>
    <D1_show/>
    <D2_Vif/> -->
            <button @click="activeComp0 = 'D1_bind'">bind 컴포넌트</button>
        <button @click="activeComp0 = 'D1_show'">show 컴포넌트</button>
        <button @click="activeComp0 = 'D2_Vif'">v-if 컴포넌트</button>

    <div class="page-view">

        <component :is="pages[activeComp0]"></component>
    </div>


</template>


<script setup>
import { ref } from 'vue';
import D1_bind from '../vue_08_25/D1_bind.vue';
import D1_show from '../vue_08_25/D1_show.vue';
import D2_Vif from '../vue_08_25/D2_Vif.vue';
const activeComp0 = ref('D1_bind')
const pages = {
    D1_bind,
    D1_show,
    D2_Vif
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