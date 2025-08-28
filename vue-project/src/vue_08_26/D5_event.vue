<template>
    <div class="tempobiz">
        <!-- 1++증가버튼 -->
        <section>
            <p>keep-alive 함수를 사용한 버튼</p>
            <keep-alive>

                <button v-on:click="cnt1++">증가버튼 {{ cnt1 }}</button>
            </keep-alive>
            <button v-on:click="cnt++">증가버튼 {{ cnt }}</button>
        </section>
        <hr>
        <img :src="lighton ? pic_bulbon : pic_bulboff" alt="">
        <section>
            <button @click="lighton = !lighton">on/off버튼</button>
        </section>
        <!-- 키입력 -->
        <section>
            <div>
                <input type="text" v-on:input="inpcount++">
                <p>{{ inpcount }}</p>

            </div>
        </section>

        <section>
            <h2>mousemove 이벤트</h2>
            <div v-on:mousemove=" colorVal = Math.floor(Math.random() * 360)"
                v-bind:style="{ backgroundColor: 'hsl(' + colorVal + ',60%,60%)' }"></div>

        </section>

        <!--메[뉴판]  -->
        <section class="menu">
            <ol>
                <li v-for="food in food_assets"></li>
            </ol>
        </section>
        <section>
            <p class="enter"></p>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import pic_bulboff from '../assets/pic_bulboff.gif'
import pic_bulbon from '../assets/pic_bulbon.gif'
const cnt = ref(0);
const cnt1 = ref(0);
const lighton = ref(false);
// 키 입력시 카운트 증가
const inpcount = ref(0);
// 색상값
const colorVal = ref('red');
</script>

<style scoped>
.bg {
    width: 200px;
    
    height: 50px;
    background-color: aqua;
}

.tempobiz {
    height: 100%;
}
.enter{
    clear: both;
}
</style>