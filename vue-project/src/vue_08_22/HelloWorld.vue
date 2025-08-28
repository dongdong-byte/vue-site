<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
const titleClass = ref('title')
const awesome = ref(true)
function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <section>
    <h2>속성바인딩</h2>
    <p>. 속성을 동적 값에 바인딩하려면 v-bind 디렉티브를 사용합니다:</p>
    <h3 :class="titleClass">나를 빨갛게 만들어 보세요</h3>
  </section>
  <br><br>
  <section>
    <h2>조건부 랜더링</h2>
    <p>v-if 디렉티브를 사용하여 요소를 조건부로 렌더링할 수 있습니다:</p>
    <p>이 h1 은 awesome의 값이 참 같은 값(truthy)일 때만 렌더링됩니다. 만약 awesome이 거짓 같은 값(falsy)으로 변경되면, DOM에서 제거됩니다.

      또한, v-else와 v-else-if를 사용하여 조건의 다른 분기를 나타낼 수 있습니다:</p>
    <button @click="toggle">토글버튼</button>
    <h3 v-if="awesome">Vue는 굉장해! 엄청나용!</h3>
    <h3 v-else>ㅠ.ㅠ오 안돼 😢</h3>
  </section>
  <br><br>
  <section>
    <h2>이벤트 핸들링</h2>
    <p>
      v-on 디렉티브를 사용하여 이벤트 리스너를 추가할 수 있습니다:
    </p>
    <button @click="count++">증가버튼</button>
    <p> 버튼이 {{ count }} 추가되었습니다.</p>
  </section>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.title {
  font-size: 2em;
  color: red
}

section {
  border: 2px solid gray;
}
</style>
