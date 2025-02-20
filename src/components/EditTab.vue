<script setup>
// imports
import axios from 'axios';
import { reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';

// initializing route, router and toast
const route = useRoute();
const router = useRouter();
const toast = useToast();

// reactive states to handle inputs
const notes = reactive({
    title: '',
    content: ''
});

// state to handle data from api
const state = reactive({
    note: {}
});

// submit function that updates the note
const handleSubmit = async () => {
    const updatedNote = {
        title: notes.title,
        content: notes.content
    }
    // try and catch statement: where "try" updates the data from the api and sends it back to the api
    try {
        const response = await axios.put(`/api/notes/${route.params.id}`, updatedNote);
        router.push(`/view/${response.data.id}`)
        toast.success('Note Updated successfully');
        
    } catch (error) {
        console.error('Error Updating Note', error);
        toast.error('Note not updated')
    }
};

onMounted(async () => {
    const res = await axios.get(`/api/notes/${route.params.id}`);
    state.note = res.data;
    try {
        notes.title = state.note.title,
        notes.content = state.note.content
        toast.success('Note updated successfully')
    } catch (error) {
        toast.error('Note not updated')
    }

})
</script>

<template>
    <div class="flex flex-col items-center bg-green-200 h-screen">
        <section class="bg-white rounded-lg h-[450px] w-[70%] mt-[30px] border border-black">
        <form @submit.prevent="handleSubmit" class="flex flex-col justify-center items-center gap-3 mt-7 mx-[25px]">
            <div class="w-full">
                <input 
                type="text"
                id="title"
                v-model="notes.title"
                placeholder="Edit Title"
                class="h-[70px] px-[15px] w-full border border-black rounded-lg text-2xl placeholder:text-2xl outline-none focus:border-green-800 capitalize"
                >
            </div>
            <div class="w-full">
                <textarea 
                type="text" 
                id="content"
                v-model="notes.content"
                placeholder="Write something..."
                rows="10"
                cols="50"
                style="resize: none;"
                class="text-lg p-[15px] w-full border border-black rounded-lg placeholder:text-xl outline-none focus:border-green-800 scroll-y-overflow"
                ></textarea>
            </div>
            <!-- ADD AND CANCEL BTNS -->
            <section class="flex items-center justify-between w-[65%] mt-[20px] text-white">
                <RouterLink to="/">
                    <button class="bg-red-600 hover:bg-red-500 py-1.5 w-[100px] rounded-lg">Cancel</button>
                </RouterLink>
                <button type="submit" class="bg-green-600 hover:bg-green-500 py-1.5 w-[100px] rounded-lg">Edit</button>
            </section>
        </form>
    </section>
    </div>
</template>