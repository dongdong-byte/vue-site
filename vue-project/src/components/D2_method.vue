<template>
    <section class="sect">
        <h3>눌러서 method함수를 실행해보세요</h3>
        <div class="box" @click="changetxt">
            <p>{{ txt }}</p>
        </div>
    </section>
    <section class="sect">
        <h3>마우스 포인터 위치 예제</h3>
        <div class="box" @mousemove="mousePos">
            <span>xPos{{ xPos }}</span><br>
            <span>yPos{{ yPos }}</span>

        </div>
    </section>
    <section class="sect">
        <h3>버튼을 누르면 버튼 카운트만틈 이미지숫자가 증가함</h3>
        <div class="box">
            <p>{{ count }}</p>
            <button @click="addcount(1)">++1증가</button>
            <button @click="addcount(5)">++5증가</button>
            <button @click="addcount(-1)">--1감소</button>

        </div>
    </section>
    <section   class="sect">
        <h3>method함수에 인자와 이벤트 객체 전달하기</h3>


        <div>
            <img id="tiger" :src="img_tiger" alt="호랑이사진" v-on:click="method($event, '안뇽ㅎㅎㅎ')">
            <p>여기서 이미지를 클릭하면 메세지가 출력됩니다.</p>
            <p>"{{ msgAndId }}"</P>
        </div>

    </section>
</template>

<script setup>

import { ref } from 'vue';
const txt = ref('나를 눌러줘');
const changetxt = () => {
    txt.value = '안녕ㅋㅋㅋㅋ'
}
// =----------Mouse Pointe
const xPos = ref(0);
const yPos = ref(0);
const mousePos = (event) => {
    xPos.value = event.offsetX;
    yPos.value = event.offsetY;

}
// ------버튼 카운트만틈 이미지숫자가 증가함
const count = ref(0);
const addcount = (num) => {
    count.value += num;
}
// --------
import img_tiger from '../assets/img_tiger.jpeg';
const msgAndId = ref('');
const method = (e, msg) => {
    console.log(e);
    console.log(msg);
    // msgAndId 새로 선언 후 초기화
    msgAndId.value = msg + ', ';
    msgAndId.value += e.target.id;
}
</script>

<style scoped>
.sect {
    margin: 10px;
    border-bottom: 3px double blue;


}

.box {
    width: 140px;
    height: 100px;
    background-color: lightgreen;
    padding: 20px;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    color: black;
    display: inline-block;
}

img {
    width: 200px;
    height: 200px;
}
</style>