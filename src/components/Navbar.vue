<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

const popUp = reactive({
    isUsed: false
})

const toggleMenu = () => {
    popUp.isUsed = !popUp.isUsed
}
</script>

<template>
    <nav class="flex justify-between items-center w-full bg-green-300 px-[30px] lg:px-[50px] py-[15px] sm:py-[10px] text-green-900 border-b border-black relative">
        <div class="flex items-center gap-1.5">
            <RouterLink to="/">
            <i class="pi pi-home text-2xl sm:text-4xl"></i>
            </RouterLink>
            <h1 class="uppercase text-xl sm:text-3xl">notes</h1>
        </div>
        <!-- MENU BUTTON -->
        <button @click="toggleMenu" class="border border-black flex justify-center items-center p-1.5 rounded-full h-10 w-10 sm:h-14 sm:w-14 bg-green-400 hover:bg-green-500 active:scale-110">
            <i class="pi pi-bars"></i>
        </button>
        <div v-show="popUp.isUsed" class="absolute top-16 sm:top-[105px] right-4 bg-white h-[270px] sm:h-[480px] w-[150px] rounded-lg shadow-xl border border-black">
            <ul class="p-3">
                <li class="border-b border-black h-[30px] uppercase hover:bg-green-200 hover:cursor-pointer">
                    <RouterLink @click="popUp.isUsed = false" to="/add">Add New</RouterLink>
                </li>
                <li class="border-b border-black h-[30px] uppercase hover:bg-green-200 hover:cursor-pointer">
                    <button @click="popUp.isUsed = false">THEME</button>
                </li>
                <li class="border-b border-black h-[30px] uppercase hover:bg-green-200 hover:cursor-pointer">
                    <RouterLink @click="popUp.isUsed = false" to="/trash">TRASH</RouterLink>
                </li>
                <li class=" border-b border-black [30px] uppercase hover:bg-green-200 hover:cursor-pointer">
                    <button @click="popUp.isUsed = false">NOTE STYLE</button>
                </li>
            </ul>
        </div>
    </nav>
</template>