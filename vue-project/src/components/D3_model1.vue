<template>
    <section>
        <div>
            <label for="">
                <input type="checkbox" v-model="chanvalue">{{ Isimportant }}
            </label>
        </div>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue';
const chanvalue = ref(false);
const Isimportant = computed(
()=>{
    if(chanvalue.value){
        return "아주중요"
    }else{
        return "그냥 중요"
    }
}
)
</script>

<style  scoped>

</style>