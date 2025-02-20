<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    type: String
})
</script>

<template>
    <!-- ADD AND CANCEL BTNS -->
    <section class="flex items-center justify-between w-[65%] mt-[20px] text-white">
        <RouterLink to="/">
            <button class="bg-red-600 hover:bg-red-500 py-1.5 w-[100px] rounded-lg">Cancel</button>
        </RouterLink>
        <button :type="props.type" class="bg-green-600 hover:bg-green-500 py-1.5 w-[100px] rounded-lg">{{ props.title }}</button>
    </section>
</template>