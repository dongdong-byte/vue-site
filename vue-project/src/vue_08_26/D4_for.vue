<template>

    <li v-for="it in items">{{ it.message }}</li>
    <li v-for="it in items">{{ items }}</li>
    <hr>
    <li v-for="food in manyFoods">메뉴: {{ food }}</li>
    <li v-for="food in manyFoods">메뉴</li>
    <ol>
    <li v-for="food in manyFoods.manyFoods" :key="food">{{ food }}</li>
</ol>
    <div v-for="food in foos_assets" :key="food.name">
        <img :src="food.src" :alt="food.name" width="100" />

        <li>{{ food.name }}</li>

    </div>
    <hr>
    <div class="food-style" v-for="food in foos_public" :key="food.name">
        <img :src="food.src" :alt="food.name" width="50" />
        <li>{{ food.name }}</li>
    </div>
    <hr>
    <!-- 인덱스 가져오기 -->
     <li v-for="(food, index) in foos_public" :key="food.name">번호는:{{ index }}이고, 음식은{{ food.name }}</li>
</template>

<script setup>
import { ref } from 'vue'
import img_burrito from '../assets/img_burrito.svg'
import img_cake from '../assets/img_cake.svg'
import img_salad from '../assets/img_salad.svg'
import img_soup from '../assets/img_soup.svg'
import img_fish from '../assets/img_fish.svg'
import img_pizza from '../assets/img_pizza.svg'

// [{key키: value값},{}]
const items = ref([{ message: 'Foo' }, { message: 'Bar' }, { message: 'Barrrrr' }])
const manyFoods = ref({
    manyFoods: [
        '브리또',
        '샐러드',
        '케이크',
        '수프',
        '생선',
        '피자',
        '밥'
    ]
})
const foos_assets = ref([
    { name: '브리또', src: img_burrito },
    { name: '샐러드', src: img_salad },
    { name: '케이크', src: img_cake },
    { name: '수프', src: img_soup },
    { name: '생선', src: img_fish },
    { name: '피자', src: img_pizza }
])
const foos_public = ref([
    { name: '브리또', src: '/images/img_burrito.svg' },
    { name: '샐러드', src: '/images/img_salad.svg' },
    { name: '케이크', src: '/images/img_cake.svg' },
    { name: '수프', src: '/images/img_soup.svg' },
    { name: '생선', src: '/images/img_fish.svg' },
    { name: '피자', src: '/images/img_pizza.svg' }
])

</script>

<style  scoped>
.food-style {
    clear: both;
    
}

li{
    list-style: none;
    font-weight: bold;
    color: rgb(16, 221, 119);
}
</style>