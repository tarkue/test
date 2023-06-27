<script setup>
import { ref } from 'vue'

const open = ref(true)
</script>

<template>
    <div class="card optional-card loading" v-if="open">
        <div class="optional-card__content"></div>
        <img 
            class="optional-card__close" 
            alt="close" 
            src="../assets/close.svg"
            @click="open = false"
        />
    </div>
</template>

<style lang="scss" scoped>
.optional-card {
    display: flex;
    align-items: center;

    width: 785px;
    height: 72px;

    &__content {
        margin-left: 18px;

        width: 699px;
        height: 36px;
    }

    &__close {
        width: 24px;
        height: 24px;
        
        position: absolute;

        margin-left: 753px;
        margin-bottom: 32px;

        cursor: pointer;

    }
}
.loading {
    .optional-card__content {
        background: var(--skeleton);
        
        background-size: 200% 100%;
        background-position-x: 180%;
        animation: 1s loading ease-in-out infinite;

        border-radius: var(--border-radius-xs);
    }
}
</style>