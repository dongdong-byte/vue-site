<template>
    <section class="sect">
        <h2>오른쪽 버튼 클릭 이벤트</h2>
        <p>사용자가 div 요소에서 오른쪽 클릭을 할 때 배경색을 변경합니다:</p>
        <div id="changebox" @click.right="changecolor" :style="{ backgroundColor: 'hsl(' + bgcolor + ', 80%, 80%)' }">
            <p>여기서 오른쪽 마우스 버튼을 누르세요.</p>
        </div>
    </section>
    <section class="sect">
        <h2>클릭해서 이미지를 바꿔보세요</h2>
        <p>오른쪽 버튼 하고 shift 버튼을 눌러서 꼬부기를 진화시켜 보세요.</p>
        <img @click.right.shift="changeImg" alt="포켓몬사진" v-bind:src="imgUrl">
    </section>
</template>

<script setup>
import { ref } from 'vue';
const bgcolor = ref(0);
const changecolor =()=>{
    // bgcolor.value+36 :현재 색상값에 36을 더합니다.
    // %360 : 360도를 넘지 않게 하기 위해 360으로 나눈 나머지를 사용합니다.
    bgcolor.value = (bgcolor.value + 36) % 360;
}
// 이미지 버튼으로 바꾸기
import start1 from '../assets/start1.jpg'
import start2 from '../assets/start2.jpg'
import start3 from '../assets/start3.jpg'
import start4 from '../assets/start4.jpg'
import start5 from '../assets/start5.jpg'
// 아래처럼 images 배열을 먼저 선언하고, 그 다음에 imgUrl, imgLabel을 초기화한다
const images = [
    { src: start1 ,label: '01.꼬부기' },
    { src: start2 ,label: '02.어니부기' },
    { src: start3 ,label: '03.거북왕' },
    { src: start4 ,label: '04.메가 거북왕' },
    { src: start5 ,label: '05.다이맥스 거북왕' }
]
const imgUrlIndex = ref(0);
const imgUrl = ref(start1);
const imgLabel=ref(images[0].label)

const changeImg=()=>{
    imgUrlIndex.value++
    if(imgUrlIndex.value >=images.length){
        imgUrlIndex.value = 0
    }
    imgUrl.value = images[imgUrlIndex.value].src
    imgLabel.value = images[imgUrlIndex.value].label
}
</script>

<style scoped>
#changebox {
   width: 160px;
      padding: 20px;
      cursor: default;
      font-weight: bold;
}
.sect{
    border: 1px solid black;
}
img{
    width: 300px;
    height: 300px;
}
</style>