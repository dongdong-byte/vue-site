<script setup>
</script>

<template>
  <p>경로 : {{ $route.fullPath }}</p>
  <h1>김동현 과제방</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>

    <RouterLink to="/">
      <li>Go to Home</li>
    </RouterLink>


    <RouterLink to="/about">
      <li>Go to About</li>
    </RouterLink>

    <RouterLink to="/day01_08_22">
      <li>day01_08_22</li>
    </RouterLink>

    <RouterLink to="/day02_08_25">
      <li>day02_08_25</li>
    </RouterLink>

    <RouterLink to="/day03_08_26">
      <li>day03_08_26</li>
    </RouterLink>



    <RouterLink to="/day04_08_27">
      <li>day04_08_27</li>
    </RouterLink>


    <RouterLink to="/wd">
      <li>Go to Ex_WebDesign</li>
    </RouterLink>


  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
li {
  list-style: none;
  font-weight: bolder;
  display: inline-block;
  color: aqua;
  padding: 20px;
  margin: 10px;
  border: 1px solid aqua;
  border-radius: 5px;
  box-shadow: 5px 5px 5px gray;
}

li:hover {
  color: violet;
  background-color: blanchedalmond;

}
</style>
