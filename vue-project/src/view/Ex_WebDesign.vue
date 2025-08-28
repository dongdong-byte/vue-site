<template>
    <div>
<button @click="gotopage('a1')">A1웹디자인 기능사</button>
<button @click="gotopage('b2')">B2웹디자인 산업기사</button>
<!-- user {{ r.id }} -->
 <sub>
    <router-view/>
 </sub>
    </div>
</template>

<script setup>
import { useRouter ,useRoute } from 'vue-router';
// 라우터 객체 {push, replace 등 네비게이터 기능만 제공}
const router = useRouter();
// 라우터 객체 {path, params, query 등 현재 라우터 정보 제공}
const route = useRoute();
 const gotopage = (id) => {
    console.log(id);
    router.push({ path: `/wd/${id}` });
 }
</script>

<style  scoped>

</style>