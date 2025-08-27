<template>
    <div>
        <input type="text" @input="inputCount++">
        <!-- 결과 출력 -->
        <p>{{ inputCount }}</p>
    </div>

    <section class="sect">
        <h2>경고 버튼 만들기</h2>
        <p>아래 버튼을 클릭하면 팝업창에 경고가 표시됩니다. 단, 첫 번째 클릭에서만 작동합니다:</p>
        <div>
            <button @click.once="createalert">경고 메세지 눌러보세요.</button>
        </div>
    </section>
    <br><br>
    <section class="sect">
        <h2>키보드 키 값 찾기 예제</h2>
        <p>텍스트 상자에 입력하여 키 값을 기록하세요:</p>
        <input type="text" @keydown="getKey">
        <p id="keyboard1">{{ keyValue }}</p>
    </section>
    <br><br>
    <section class="sect">
        <h2>예제: 'S' ,'ㄴ' 키로 경고창 띄우기</h2>
        <div>
            <p>'S' 키를 눌러 경고창을 확인하세요:</p>
            <!-- 영문은 @ keydown-->
            <textarea cols="30" rows="3" @keydown.s="checkNKey" placeholder="적으세여"></textarea>
            <p>한글 ㄴ을 입력할시 경고창이 뜨게 하는법</p>
            <textarea cols="30" rows="3" @input="checkKorea" placeholder="적으세여"></textarea>
        </div>
    </section>
    <br><br>
    <section>
        <h2>예제: 'Enter'와 'Ctrl' 조합으로 경고창 띄우기</h2>
        <!-- Vue의 키 이벤트 수식어는 영문 키워드(예: .enter, .esc, .s 등)만 지원합니다. -->
        <textarea @keydown.ctrl.enter="checkkeyy"></textarea>
    </section>
</template>

<script setup>
import { ref } from 'vue';
const inputCount = ref(0);
// Example: Create Alert Only Once
const createalert = () => {
    alert('경고 메세지입니다.ㅎㅎㅎ');
}
// Example: Find The Keyboard Key Value
const keyValue = ref('');
const getKey = (event) => {
    keyValue.value = event.key;
    console.log(event.key);
}
// Example: 'S' Key Generates Alert
const checkNKey = () => {

    alert('s버튼을 누르셧네요!!!')

}
// Example: 'ㄴ' Key Generates Alert
const checkKorea = (event) => {
    const value = event.target.value;
    if (value.includes('ㄴ')) {
        alert('ㄴ버튼을 누르셧네요!!!')
    }
}

const checkkeyy = () => {
    alert('Ctrl + Enter 눌렀네요!!!')
}

</script>

<style scoped>
.sect {
    border: 2px solid black;
}

#keyboard1 {
    background-color: lightgreen;
    color: black;
}
</style>