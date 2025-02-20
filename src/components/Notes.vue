<script setup>
import { onMounted, reactive } from 'vue';
import Note from './Note.vue';
import axios from 'axios';

const state = reactive({
    notes: []
});

onMounted(async () => {
    try {
        const response = await axios.get(`/api/notes`)
        state.notes = response.data
    } catch (error) {
        console.error('Error getting notes', error)
    }
});

</script>

<template>
    <div class="px-[25px] sm:px-[80px] bg-green-100 h-screen">
        <section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-[30px]">
            <Note v-for="note in state.notes" :key="note" :note="note"/>
        </section>
    </div>
</template>