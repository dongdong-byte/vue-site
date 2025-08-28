<template>
    <div>
        <input type="text" @input="inputCount++">
        <!-- 결과 출력 -->
        <p>{{ inputCount }}</p>
    </div>

    <section class="sect">
        <h2>알람 만들기</h2>
        <p>@click 버튼을 사용해서 alert 함수를 소환해서 알람메세지 부르른것</p>
        <div>
            <button @click.once="createalert">경고 메세지 눌러보세요.</button>
        </div>
    </section>
    <br><br>
    <section class="sect">
        <h2>Example: Find The Keyboard Key Value</h2>
        <p>Start writing inside the text box to record the key value:</p>
        <input type="text" @keydown="getKey">
        <p id="keyboard1">{{ keyValue }}</p>
    </section>
    <br><br>
    <section class="sect">
        <h2>Example: 'S' ,'ㄴ' Key Generates Alert</h2>
        <div>
            <p>Press the 'S' key to see the alert:</p>
            <!-- 영문은 @ keydown-->
            <textarea cols="30" rows="3" @keydown.s="checkNKey" placeholder="적으세여"></textarea>
            <p>한글 ㄴ을 입력할시 경고창이 뜨게 하는법</p>
            <textarea cols="30" rows="3" @input="checkKorea" placeholder="적으세여"></textarea>
        </div>
    </section>
    <br><br>
    <section>
        <h2>Example: 'enter' and 'Ctrl' Combination Generates Alert</h2>
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