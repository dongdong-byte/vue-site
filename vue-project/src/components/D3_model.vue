<template>
    <section class="sect">
        <h3>양방향 바인딩</h3>
        <p>inpText 속성은 두 가지 방식으로 바인딩됩니다: 입력 요소에서 Vue 속성으로, 그리고 Vue 속성에서 입력 요소로.</p>
        <div class="div">
            <input type="text" v-model="inpText">
            <p>inpText :"{{ inpText }}"</p>
        </div>
    </section>
    <br><br>

    <section class="sect">
        <h3>예제: 중요 체크박스</h3>
        <p>이 '중요' 체크박스는 나중에 쇼핑리스트 양식에 추가될 동적 양식 기능입니다. 하지만 여기서는 작동 방식을 쉽게 볼 수 있도록 먼저 분리합니다.</p>
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
        <h3>예제: 중요 아이템이 포함된 쇼핑 리스트</h3>
        <p>이 쇼핑 리스트 버전에서는 사용자가 아이템이 중요한지 정의할 수 있습니다. 체크박스는 사용자가 체크할 때 상태를 보여주기 위해 'true' 또는 'false' 텍스트가 변경되므로 더 동적입니다.</p>
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