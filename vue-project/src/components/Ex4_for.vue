<template>
    <section class="sect">
        <h2>v-for함수는 li 태그를 만듭니다.</h2>
        <p>v-for 함수는 반복 구조를 생성하는 명령어이다</p>
        <p>반복대상인 배열의 길이만큼 지정된 태그를 복제해서 만들어낸다.</p>
        <ol>
            <li v-for="c in manycountry">{{ c }}</li>
        </ol>
    </section>
    <br><br>
    <section class="sect">
        <h2>v-for함수를 이용해 이미지를 배열하는방법</h2>
        <p>v-for 디렉티브는 배열또는 객체를 기반으로 html요소를 반복생성하는 기능이다</p>
        <p>이미지 URL 또는 이미지 데이터를 저장한 배열을 가지고 이 데이터를 반복하여 img 태그를 생성하는 것도 가능합니다.</p>
        <div>
            <img v-for="country in country_assets" v-bind:src="country.url" :key="country.name">
        </div>
        <ul>
            v-for="country in country_assets"
            <li>즉, country_assets 배열 안의 각각의 항목마다 img 태그가 만들어집니다.</li>
        </ul>
        <ul>
            :key="[country.name](http://country.name)"
            <li>Vue.js에서 반복 렌더링 시, 각 항목을 고유하게 식별하기 위해 key 속성을 지정하는 것입니다.</li>
        </ul>

    </section>
    <br><br>
    <section class="sect">
        <h2>v-for함수를 이용해 이미지 하고 글자를 같이 배열하는방법</h2>
        <p>div 태그 안에 여러 개의 figure 태그들이 반복적으로 생성됩니다.</p>
        <p>각 figure 태그 안에는 img 태그와 p 태그가 포함되어 있습니다.</p>
        <div>
            <figure v-for="p in manycountry1" :key="p.name">
                <img v-bind:src="p.url" alt="국기">
                <figcaption>{{ p.name }}</figcaption>
            </figure>
        </div>


    </section>
</template>

<script setup>
const manycountry = ['korea', 'america', 'USE', 'poland', 'brazil']
// 이미지 URL 배열
import { ref } from 'vue'
import korea from '../assets/korea.png'
import america from '../assets/america.png'
import UAE from '../assets/UAE.png'
import poland from '../assets/poland.png'
import brazil from '../assets/brazil.png'

const country_assets = ref([

    { name: '한국', url: korea },
    { name: '미국', url: america },
    { name: 'USE', url: UAE },
    { name: '폴란드', url: poland },
    { name: '브라질', url: brazil }
])

const manycountry1 =ref([
{name: '한국', url: '../public/korea.png' },
{name: '미국', url: '../public/america.png' },
{name: 'USE', url: '../public/UAE.png' },
{name: '폴란드', url: '../public/poland.png' },
{name: '브라질', url: '../public/brazil.png' }
])



</script>

<style scoped>
.sect {
    border: 1px solid black;
}

img {
    width: 70px;
    margin: 5px;

}
figure{
    width: 100px;
    padding: 10px;
    margin: 10px;
    background-color: lightskyblue;
    border-radius: 10px;
    justify-content: center;
}
figcaption{
    text-align: center;
    font-weight: bold;
}
</style>