<template>
    <section class="section">
        <h3>'v-bind' 이미지 불러오기</h3>
        <p>이미지 불러 올때는 assets 폴더에 넣어야 합니다.</p>
        <img src="../assets/space.jpg" alt="우주그림">
    </section>
    <br>
    <hr>
    <section class="section">
        <h2>글자 크기속성 바인딩</h2>
        <p>글자의 크기를 동적으로 바꿀수 있습니다.</p>
        <p>버튼이 왜 안되나요?</p>
        <div>
            <div v-bind:style="{ fontSize: size }">글자 크기를 바꾸세요.</div>
            <button @click="size++">키우기</button>
            <button @click="size--">줄이기</button>

        </div>
    </section>
    <br><br>
    <section class="section">
        <h2>글자크기 속성 바인딩2</h2>
        <p>size2란 숫자에 px이란 단위를 추가한 녀석입니다.</p>
        <p>@click는 v-on:click의 축약형, size2란 숫자를 클릭시 ++로 size2값을 1씩 증가시키는 연산입니다.</p>

        <div>
            <div v-bind:style="{ fontSize: size2 + 'px' }">글자 크기를 바꾸세요.</div>
            <button @click="size2++">크기 키우기</button>
            <button @click="size2--">크기 줄이기</button>
        </div>
    </section>
    <br><br>

    <section class="section">
        <h2>동적스타일 바인딩을 사용하는 예시</h2>
        <p>'font-size' 속성을 동적으로 바인딩하는 예시입니다.</p>
        <p>'font-size' css 속성을 camelcase가 아니라 kebab-case로 작성했습니다.</p>
        <div v-bind:style="{ 'fontSize': size3 + 'px' }">글자 크기를 바꾸세요</div>
        <button @click="size3++">크기를 키우세요</button>
        <button @click="size3--">크기를 줄이세요</button>
    </section>
    <br><br>
    <section class="section">
        <h2>동적으로 배경색을 변경하는 스타일 </h2>
        <p>배경색을 동적으로 변경할 수 있습니다.</p>
        <div v-bind:style="{ color: 'white', backgroundColor: `rgb(${redvalue},${bluevalue},${greenvalue})` }">색을 바꿔봐
        </div>
        <div>
            <h3>Red : {{ redvalue }}</h3>
            <p>input=range사용</p>
            <input type="range" min="0" max="255" v-model="redvalue">
            <button @click="redvalue = 0">초기화</button>
            <button @click="redvalue++">증가</button>
        </div>
        <div>
            <h3>Green : {{ greenvalue }}</h3>
            <p>input=number사용</p>
            <input type="number" max="255" min="0" v-model="greenvalue">
            <button @click="greenvalue = 0">초기화</button>
            <button @click="greenvalue++">증가</button>
            <button @click="greenvalue--">감소</button>

        </div>

        <div>
            <h3>Blue : {{ bluevalue }}</h3>
            <p>input=text활용</p>

            <input type="text" max="255" min="0" v-model="bluevalue" placeholder="0-255까지 숫자를 입력하세요.">
            <button @click="bluevalue = 0">초기화</button>

        </div>
    </section>
    <br><br><br>
    <section class="section" v-bind:style="{ backgroundColor: isimport ? `blue` : `purple` }">
        <h3 style="color: aliceblue;">if값에 따라 배경색이 바뀜</h3>
        <p style="color: aliceblue;">true:grayyellow , false:purple</p>
        <button @click="toggleIsImport">true? or false?</button>
        <p style="color: white; font-size: 20px; font-weight: bold;">{{ isimport }}</p>
    </section>
    <br><br><br>
    <section class="section">
        <h3>class를 사용한 v-bind</h3>
        <div v-bind:class="Classname">클래스 바인드</div>
        <div v-bind:class="{ Myclass: true }">이 클래스는 뒤 배경색깔이 바뀜</div>
        <div>
            <div :class="{ Myclass: isImport }">클래스 important속성 여부</div>
        </div>

    </section>
</template>

<script setup>
import { ref } from 'vue';
const size = ref('10px');
const size2 = ref('20');
const size3 = ref(15);
const redvalue = ref(0);
const bluevalue = ref(0);
const greenvalue = ref(0);
const isimport = ref(true);
function toggleIsImport() {
    // 현재 값의 반대로 변경
    isimport.value = !isimport.value;
}


</script>

<style scoped>
.section {
    text-align: center;
    border: 1px solid black;
}

img {
    width: 300px;
    height: 300px
}

button {
    background-color: rgb(85, 85, 185);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    margin: 10px;
}
</style>