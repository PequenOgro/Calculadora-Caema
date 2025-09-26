<script setup>
import Calculator from './components/Calculator.vue';
</script>

<template>
  <main>
    <Calculator />
  </main>
</template>

<style scoped>
/* Apenas garanta que o 'main' não tenha estilos que atrapalhem */
main {
  padding: 0;
  margin: 0;
}

</style>