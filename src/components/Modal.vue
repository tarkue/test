<script setup>
import { ref } from 'vue'

import { itemsStorage } from '../itemsStorage/itemsStorage'

const text = ref('')
const openActions = ref(false)

const props = defineProps({
  item: Object,
  cells: Object,
  open: Object
})

const deleteItem = () => {
    const count = props.cells[props.item.pos].count
    props.cells[props.item.pos].count = count - Number(text.value)
    if (props.cells[props.item.pos].count == 0) { 
        props.cells[props.item.pos].item = ''
        props.open['k'] = false
    }
    itemsStorage.set(props.cells)
}

</script>

<template>
    <div class="modal loading">
        <img 
            src="../assets/close.svg" 
            alt="close"
            class="modal__close"
            @click="props.open['k'] = false"
        >
        <img :src="item.item" alt="item" class="modal__icon">
        <div class="modal__split"></div>
        <div class="modal__content">
            <div class="modal__title"></div>
            <div class="modal__text">
                <div class="stub"></div>
                <div class="stub"></div>
                <div class="stub"></div>
                <div class="stub"></div>
                <div class="stub"></div>
            </div>
        </div>
        <div class="modal__split"></div>
        <button class="modal__delete primary-button" @click="openActions = true">
            Удалить предмет
        </button>
        <transition name="leave-top">
            <div class="modal__actions" v-if="openActions">
                <input type="text" placeholder="Введите количество" v-model="text" />
                <button @click="openActions = false" class="modal__actions__close">
                    Отмена
                </button>
                <button class="primary-button modal__actions__accept" @click="deleteItem()">
                    Подтвердить
                </button>
            </div>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
    .modal {
        display: flex;
        flex-direction: column;
        align-items: center;

        position: absolute;
        width: 250px;
        height: 500px;

        border-left: 1px solid var(--primary-border, #4D4D4D);
        background: rgba(38, 38, 38, 0.50);
        backdrop-filter: blur(8px);

        z-index: 2;

        margin-left: 275px;

        &__icon {
            width: 130px;
            height: 130px;

            margin-top: 55px;
            margin-bottom: 30px;
        }

        &__split {
            width: 220px;
            height: 1px;

            background: var(--primary-border)
        }

        &__delete {
            width: 220px;
            height: 39px;
            
            margin-top: 18px;
        }

        &__content {
            width: 211px;
            height: 168px;

            margin-top: 16px;
            margin-bottom: 24px;
        }

        &__close {
            width: 24px;
            height: 24px;

            position: absolute;

            margin-left: 210px;
            margin-top: 8px;

            cursor: pointer;
        }

        &__title {
            min-width: 211px;
            min-height: 30px;

            margin-bottom: 24px;
        }

        &__text {
            min-width: 211px;
            
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;

            .stub {
                min-width: 80px;
                width: 211px;
                height: 10px;

                &:nth-child(4) {width: 180px}
                &:nth-child(5) {width: 80px}
            }
        }

        &__actions {
            border: 1px solid var(--primary-border);
            background: rgba(38, 38, 38, 0.60);
            backdrop-filter: blur(8px);

            position: absolute;
            
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 210px;

            padding: 20px 21px;

            margin-top: 363px;
            margin-left: 2px;

            input {
                width: 210px;
                height: 40px;

                margin-bottom: 20px;

                border-radius: 4px;
                border: 1px solid var(--primary-border);
                background: var(--seondary-bg);
                
                color: #FFF;
                font-size: 14px;

                outline: none;
            }

            button {
                height: 33px;
                border-radius: var(--border-radius-xs);
            }

            &__close {
                width: 88px;
            }

            &__accept {
                width: 112px;
            }
        }
    }
    .loading {
    .modal__title,
    .modal__text .stub {
        background: var(--skeleton);
        
        background-size: 200% 100%;
        background-position-x: 180%;
        animation: 1s loading ease-in-out infinite;

        border-radius: var(--border-radius-xs);
    }
}
.leave-top-enter-active,
.leave-top-leave-active {
  transition: transform 0.5s ease-in-out;
}

.leave-top-enter-from,
.leave-top-leave-to {
  transform: translateY(400px)
}
</style>