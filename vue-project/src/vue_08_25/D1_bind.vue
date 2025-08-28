<template>
    <!-- img첫번째로 부르는 방법 -->
    <img v-bind:src="'../assets/img_beach3.jpg'" alt="img_beach3">

    <hr>
    <!--  v-bind 글자 크기 속성 바인딩 -->
    <div v-bind:style="{ fontSize: Size }">너는 V_bind:글자 크기속성이야</div>
    <!-- size2는 값만 있는 녀석 -->
    <div v-bind:style="{ fontSize: Size2 + 'px' }">너는 v_bind : 글자 크기속성이야호호호</div>
    <!-- px로 뺐으니까 size3도 값만 있으면 된다 -->
    <div v-bind:style="{ 'font-size': Size3 + 'px' }">너는 v_bind css 글자크기 속성</div>
    <!-- 백틱` 으로쓸때는 $는 중괄호를 사용한다 -->
    <div v-bind:style="{ backgroundColor: `rgb(${bgval}, 100, 100)` }">백그라운드 색상값을 backgroundColor:`rgb(${bgval.value},
        100, 100)`변수 적용</div>
    <!--  backgroundColor 속성을 조건문 삼중 연산자(?)와 템플릿 리터럴을 활용하여 지정하고 있습니다 -->
    <!-- isImport가 true이면, 배경 색상은 'lightcoral'이 되고, 그렇지 않으면 'lightgray'이 적용됩니다. -->
    <div v-bind:style="{ backgroundColor: isImport ? `lightcoral` : `lightgray` }">백그라운드 색상값을 조건에 따라 다르게</div>
    <!-- div 클래스 를 classname으로 지정 -->
    <div v-bind:class="Classname">클래스 바인드</div>
    <br>
    <!--  -->
    <div v-bind:class="{ Myclass: true }">이 클래스는 뒤 배경색깔이 바뀜</div>
    <br>
    <!-- 앞에 : 이 들어간 애들은 v-bind하고 같다 단축문법 -->
     <div>
    <div :class="{ Myclass: isImport }">클래스 important속성 여부</div>
    </div>
</template>

<script setup>
import { ref } from "vue";
// img 두번째로 부르는 방법
import img_beach3 from '../assets/img_beach3.jpg'
const Size = ref("25px")
const Size2 = ref(39)
const Size3 = ref(45)
// bgval 는 빨간색상값
const bgval = ref(180)
// isImport는 컴포넌트의 데이터 또는 계산된 속성(computed)으로 정의된 논리값입니다.
const isImport = ref(true);
// classname 의 변수는 impclass로 지정
const Classname = ref("impclass")
const Myclass = ref("Myclass")
</script>


<style scoped>
/* 이미지 크기 조정 style에서 조정함 */
img {
    width: 50px;
    height: 50px;
}

/* impclass를 스타일에서 속성지정 */
.impclass {
    background-color: aqua;
    border: 1px dashed black;

}

.Myclass {
    background-color: yellow;
    border: 3px dashed blue;
}
</style>