<template>
     <div id="buttonsection">
            <div>
                <div>
                    <p>공지사항/갤러리</p>
                </div>
            </div>
            <div>
                <div>
                    <p>베너</p>
                </div>
            </div>
            <div>
                <div>
                    <p>바로가기</p>
                </div>
            </div>

     </div>
</template>

<script setup>

</script>

<style  scoped>
 #buttonsection {
     display: flex;
     justify-content: space-between;
     padding: 0px;
 }

    #buttonsection>div {
        width: 33.33%;
        height: 200px;
        border: 2px solid black;
        background-color: lightblue;
        text-align: center;
        line-height: 132px;
        font-size: 30px;
        font-weight: bold;
       
    }
    #buttonsection>div>div{
        margin: 0px;
    }
</style>