<script setup>
import Inventory from "@/src/components/Inventory.vue";
import OptionalCard from "@/src/components/optionalCard.vue";
import WorldCard from "@/src/components/worldCard.vue";

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
