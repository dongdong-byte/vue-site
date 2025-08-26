<template>
    <section class="sect">
        <h2>v-for 디렉티브의 index 사용법</h2>
        <p>개체를 배열할때 index숫자 배열은 유용합니다.</p>
        <p>이것을 v-for함수로 구현할수 있습니다.</p>
        <div class="font">
            <div v-for="(a,index) in manystars">
                {{ index }} : "{{ a }}" <br>

            </div>
        </div>
    </section>
    <br><br>
    <section class="sect">
        <h2>종합문제</h2>
        <p>url 하고 글자를 같이 나오게 하기</p>
        <div>
            <p v-for="(x,index) in manystars2" :key="index">{{ index }} : "{{ x.name }}", img: <img :src="x.img" alt="star image"></p>
        </div>

    </section>

</template>

<script setup>
import{ref} from 'vue'
import sunImg from '../assets/sun.jpg'
import earthImg from '../assets/earth.jpg'
import venusImg from '../assets/venius.jpg'
import marsImg from '../assets/mars.jpg'
import saturnImg from '../assets/saturn.jpg'

const manystars = ['sun','earth','Venus','Mars','Saturn']

const manystars2 = ref([
  { name: 'sun', img: sunImg },
  { name: 'earth', img: earthImg },
  { name: 'Venus', img: venusImg },
  { name: 'Mars', img: marsImg },
  { name: 'Saturn', img: saturnImg }
])
</script>

<style scoped>
.sect {
    display: inline-block;
      border: dashed black 1px;
      padding: 10px;
      background-color: lightgreen;
}
.font{
    color: rgb(195, 0, 255);
    font-weight: bold;
    text-align: center;
}
img {
    width: 70px;
    margin: 5px;
}
</style>