<script setup>
import Inventory from "./components/Inventory.vue";
import OptionalCard from "./components/optionalCard.vue";
import WorldCard from "./components/worldCard.vue";

</script>

<template>
  <WorldCard />
  <Inventory />
  <OptionalCard />
</template>

<style scoped lang="scss">
  .hello {
    width: 100px;
    height: 100px;
    background: red;
  }
</style>
