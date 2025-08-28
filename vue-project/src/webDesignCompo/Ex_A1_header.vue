<template>
    <div id="header">
        <span class="headerflex">
            <img class="firstimg" src="../assets/pika.png" alt="피카츄">
        </span>
        <div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
#header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
}

.header-flex {
    width: 1200px;
    align-items: center;
    /* 세로 중앙 정렬 */
    gap: 30px;
    /* logo와 nav 사이 간격 */
    justify-content: flex-end;
}

span {
    display: flex;
    align-items: center;
    width: 20%;
    height: 100px;
    background-color: lightgreen;
}

nav {
    width: 800px;
    height: 100px;
    background-color: lightcoral;
}

nav>ul {
    display: flex;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-direction: row-reverse;

}

nav>ul>li {
    width: 200px;
    height: 50px;
    margin-right: 20px;
    font-size: 20px;
    text-align: center;
    justify-content: center;
}





.firstimg {
    width: 100px;
    height: 100px;
    float: inline-start;
}
</style>