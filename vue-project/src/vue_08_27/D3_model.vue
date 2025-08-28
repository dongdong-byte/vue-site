<template>
    <section class="sect">
        <h3>Example: Two-way Binding</h3>
        <p>The inpText property is bound two ways: From the input element to the Vue property, and from the Vue property
            to the input element.</p>
        <div class="div">
            <input type="text" v-model="inpText">
            <p>inpText :"{{ inpText }}"</p>
        </div>
    </section>
    <br><br>

    <section class="sect">
        <h3>Example: Important Checkbox</h3>
        <p>This 'important' checkbox is a dynamic form feature that will be added to a shoppinglist form later, but we
            isolate it here first to easier see how it works.</p>
        <div>
            <form>
                <p>
                    중요한가요?
                    <label>
                        <input type="checkbox" v-model="important">
                        {{ important }}
                    </label>
                </p>
            </form>
        </div>

    </section>
    <br><br>


    <section class="sect">
        <h3>Example: Shopping List With Important Items</h3>
        <p>In this version of our shopping list the user can define if an item is important. The checkbox is more
            dynamic because the 'true' or 'false' text changes to show the status when the user checks it.</p>
        <div>
            <form action="">
                <p>무엇이 필요하나용?<br>
                    <label>
                        <input type="text" required placeholder="예: 토마토" v-model="itemName">
                       
                    </label>
                </p>
                <p>
                    얼마나 필요하나요? <br>
                    <label>
                        <input type="number" required placeholder="예: 5" v-model="itemNumber">
                    </label>
                </p>

                <p>
                    중요한가요? <br>
                    <label for="">
                        <input type="checkbox" v-model="itemImportant">{{ itemImportant }}
                    </label>
                </p>
                <button type="submit" @click="addItem">아이템 추가</button>
            </form>

        </div>
        <hr>
        <!-- 출력담당 -->
        <div>
            <p><strong>쇼핑리스트</strong></p>
            <ul>
                <li v-for="item in shoppingList" v-bind:class="{ impClass: item.important }">제품 : {{ item.name }} 
                    , 갯수 : {{ item.number }} 개 ,
                     중요도 : {{ item.important }}</li>
            </ul>
        </div>

    </section>
</template>

<script setup>
import { ref } from 'vue';
const inpText = ref('Initial text');
const important = ref(false);
// 쇼핑리스트
const itemName = ref('');
const itemNumber = ref(1);
const itemImportant = ref(false);
const shoppingList = ref([
    { name: '토마토', number: 3, important: false },
    { name: '피자', number: 2, important: true },
]);


  const  addItem = () => {
        const newItem = {
            // name: 사용자로부터 입력받은 상품 이름(itemName.value)
            name: itemName.value,
            // number: 구매하려는 수량(itemNumber.value)
            number: itemNumber.value,
            // important: 중요도 또는 우선순위 여부(itemImportant.value)
            important: itemImportant.value
        };
        // shoppingList 역시 Vue에서 ref로 선언된 배열이며, 새로 만든 newItem 객체를 배열의 끝에 추가합니다
        shoppingList.value.push(newItem);
        // 입력 필드 초기화
        itemName.value = null;
        itemNumber.value = null;
        itemImportant.value = false;
    }

</script>

<style scoped>
.sect {
    border: 1px solid black;
}

.div {
    color: chartreuse;
}

li{
     border-radius: 5px;
      padding: 5px;
      margin: 2px;
      background-color: rgb(211, 254, 211);
      color: black;

}
</style>