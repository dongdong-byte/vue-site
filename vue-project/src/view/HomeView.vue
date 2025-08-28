<script>
export default {
  methods: {
    goToAbout() {
      this.$router.push('/about')
    },
  },
}
</script>

<template>
  <h2>HomeView</h2>
  <div>
    여기에 컴포넌트를 추가해서 작업하자
  </div>
  <button @click="goToAbout">어바웃</button>
</template>
<style  scoped>

</style>