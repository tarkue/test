<script setup>
import { ref, reactive } from 'vue'

import { itemsStorage } from '../itemsStorage/itemsStorage'

import Modal from "./Modal.vue"
// Drag and drop 
const cells = ref(itemsStorage.get())

const startDrag = (event, item) => {
    event.target.classList.add('draggable')
    setTimeout(() => {
        event.target.classList.remove('draggable')
    }, 5)

    event.dataTransfer.clearData();
    event.dataTransfer.setData('itemID', item.pos)

}

const onDrop = (event, pos) => {
    const itemID = event.dataTransfer.getData('itemID')
    const item = cells.value.find((item) => item.pos == itemID)
    if (cells.value[pos].item == '') {
        cells.value[item.pos] = {pos: item.pos, count: 0, item: ''}
        cells.value[pos] = {pos: pos, count: item.count, item: item.item}
        itemsStorage.set(cells.value)
    } 
}

// Modal
const open = reactive({k: false})

const modalItem = ref('')

const openItem = (event, cell) => {
    open['k'] = true
    modalItem.value = cell
}
 
</script>

<template>
    <div class="card inventory">
        <transition name="leave" >
            <Modal 
                :item="modalItem" :cells="cells" 
                :open="open" v-if="open['k']"
            />
        </transition>
        <div 
            class="inventory-cell"
            v-for="cell in cells" :key="cell.pos"
            @drop="onDrop($event, cell.pos)"
            @drageneter.prevent
            @dragover.prevent
        >
            <div 
                class="item" 
                draggable="true" 

                @dragstart="startDrag($event,cell)"
                @click="openItem($event, cell)"

                v-if="cell.item" 
            >
                <img 
                    :src="cell.item" alt="item" 
                    draggable="false"
                >
            </div>
            <div 
                class="inventory-cell__counter" 
                v-if="cell.count"
            >
                    {{ cell.count }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .inventory {
        width: 525px;
        height: 500px;

        display: flex;
        flex-wrap: wrap;

        overflow: hidden;
        position: relative;
    
        &-cell {
            width: 104px;
            height: 99px;

            border-left: 1px solid var(--primary-border);
            border-top: 1px solid var(--primary-border);
            
            cursor: pointer;


            &:hover {
                background: var(--hover-bg);
                transition: 0.3s background;
            }
            &__counter {
                display: flex;
                justify-content: center;
                align-items: center;

                width: 16px;
                height: 16px;
                
                margin-left: 85px;
                margin-top: -17px;

                position: absolute;

                border-radius: 6px 0px 0px 0px;
                border: 1px solid var(--primary-border);
                background: var(--seondary-bg);

                opacity: .4;
                font-size: 10px;
            }
        }
    }
    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 103px;
        height: 98px;
    }


.leave-enter-active,
.leave-leave-active {
  transition: transform 0.5s ease-in-out;
}

.leave-enter-from,
.leave-leave-to {
  transform: translateX(400px)
}

</style>
