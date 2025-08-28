<template>

    <div id="container">
        <header>
            
            <Ex_A1_header />
        </header>
        <main>
            <div>
               <Ex_A1_imgslide/>
            </div>
            <div>
                <Ex_A1_butonsect/>
            </div>
        </main>
        <footer>
            <Ex_A1_footer/>
        </footer>
    </div>
</template>

<script setup>
import Ex_A1_butonsect from '../webDesignCompo/Ex_A1_butonsect.vue';
import Ex_A1_footer from '../webDesignCompo/Ex_A1_footer.vue';
import Ex_A1_header from '../webDesignCompo/Ex_A1_header.vue';
import Ex_A1_imgslide from '../webDesignCompo/Ex_A1_imgslide.vue';


</script>

<style scoped>
*{
    border: 3px solid blue;
}
#container{
    width: 1200px;
    height: 700px;
    margin: auto;
    border: 2px solid black;
}

</style>