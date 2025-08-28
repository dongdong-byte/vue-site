<template>
     <!-- 슬라이드 박스 -->
        <div id="slidebox" class="imgsect">
            <div class="slideshow-container">
                <img  id="slideshow" src="../assets/diablo.jpg" alt="디아블로이미지" class="mySlides fade">
                <img  id="slideshow"  src="../assets/doom.jpg" alt="둠이미지" class="mySlides fade">
                <img  id="slideshow" src="../assets/starcraft.jpg" alt="스타크래프트이미지" class="mySlides fade">
                <img  id="slideshow" src="../assets/pokemon.jpg" alt="포켓몬이미지" class="mySlides fade">
            </div>
            <div style="text-align:center">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>

        </div>
</template>

<script setup>


   import { onMounted, onUnmounted } from 'vue';
import { ref } from 'vue';

let timer = null;
const slideIndex = ref(0);

const showSlides = () => {
    var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex.value++;
        if (slideIndex.value > slides.length) { slideIndex.value = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex.value - 1].style.display = "block";
        dots[slideIndex.value - 1].className += " active";
        
    timer = setTimeout(showSlides, 4000);
};

onMounted(() => {
    showSlides();
});

onUnmounted(() => {
    clearTimeout(timer);
});
</script>

<style  scoped>
 .imgsect {
     height: 300px;
 }

 #slidebox {
     box-sizing: border-box
 }



 .mySlides {
     width: 1300px;
     height: 300px;
     object-fit: cover;
     /* 이미지 비율 유지하며 크롭 */
     display: none;
 }

 #slideshow {
     vertical-align: middle;
     width: 100%;
     object-fit: contain;
     height: 250px;
 }

 /* Slideshow container */
 .slideshow-container {
     max-width: 1200px;

     position: relative;
     margin: auto;
     width: 100%;

 }

 /* Next & previous buttons */
 .prev,
 .next {
     cursor: pointer;
     position: absolute;
     top: 50%;
     width: auto;
     padding: 16px;
     margin-top: -22px;
     color: white;
     font-weight: bold;
     font-size: 18px;
     transition: 0.6s ease;
     border-radius: 0 3px 3px 0;
     user-select: none;
 }

 /* Position the "next button" to the right */
 .next {
     right: 0;
     border-radius: 3px 0 0 3px;
 }

 /* The dots/bullets/indicators */
 .dot {
     cursor: pointer;
     height: 5px;
     width: 5px;
     margin: 0 2px;
     background-color: #bbb;
     border-radius: 50%;
     display: inline-block;
     transition: background-color 0.6s ease;
 }

 .active,
 .dot:hover {
     background-color: #717171;
 }

 /* Fading animation */
 .fade {
     -webkit-animation-name: fade;
     -webkit-animation-duration: 1.5s;
     animation-name: fade;
     animation-duration: 1.5s;
 }

 @-webkit-keyframes fade {
     from {
         opacity: .4
     }

     to {
         opacity: 1
     }
 }

 @keyframes fade {
     from {
         opacity: .4
     }

     to {
         opacity: 1
     }
 }

 /* On smaller screens, decrease dot size */
 @media only screen and (max-width: 300px) {
     .dot {
         visibility: hidden
     }
 }

 /* 슬라이드 박스 끝 */
</style>