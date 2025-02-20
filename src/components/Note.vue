<script setup>
import { onMounted, reactive, defineProps } from 'vue';
import { RouterLink } from 'vue-router';
// import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import axios from 'axios';


const state = reactive({
    notes: null
});

const props = defineProps({
    note: Object
})

onMounted(async () => {
    try {
        const response = await axios.get(`/api/notes`)
        state.notes = response.data
    } catch (error) {
        console.error('Error getting notes', error)
    }
})
</script>

<template>
    <div class="w-[270px] h-[270px] bg-white rounded-lg border border-black shadow-lg">
        <!-- TITLE BAR -->
        <div class="capitalize bg-green-300 border-b border-black text-center rounded-t-lg flex justify-center py-1 px-3 h-[35px] scrollbar-scroll">
            <h2 v-if="state.notes">{{ note.title }}</h2>
            <h2 v-else>loading</h2>
        </div>
        <!-- CONTENT -->
        <RouterLink :to="`/view/${note.id}`">
            <div class="hover:cursor-pointer scrollbar-scroll">
                <p v-if="state.notes" class="m-4 text-gray-500">{{ note.content.slice(0, 250) + ' ...' }}</p>
                <p v-else>loading data</p>
            </div>
        </RouterLink>
    </div>
</template>