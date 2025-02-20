<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification';
import { notes } from '@/lib/notes';

// initialize toast
const toast = useToast();

// initialize router
const router = useRouter()

const state = reactive({
    title: '',
    content: '',
    date: ''
})

const handleSubmit = async () => {
    const newNote = {
        title: state.title,
        content: state.content,
        date: state.date
    }
    try {
        const response = await axios.post(`/api/notes`, newNote);
        router.push(`/notes/${response.data.id}`)
        router.push('/')
        toast.success('Note Added successfully');
        
    } catch (error) {
        console.error('Error Adding New Note', error);
        toast.error('Note not added.')
    }
    console.log('testing');
    
}
</script>

<template>
    <div class="flex flex-col items-center bg-green-200 h-screen">
        <section class="bg-white rounded-lg h-[450px] w-[70%] mt-[30px] border border-black">
        <form @submit.prevent="handleSubmit" class="flex flex-col justify-center items-center gap-3 mt-7 mx-[25px]">
            <div class="w-full">
                <input 
                type="text"
                id="title"
                v-model="state.title"
                placeholder="Add Title"
                class="h-[70px] px-[15px] w-full border border-black rounded-lg text-2xl placeholder:text-2xl outline-none focus:border-green-800 capitalize"
                >
            </div>
            <div class="w-full">
                <textarea 
                type="text" 
                id="content"
                v-model="state.content"
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
                <button type="submit" class="bg-green-600 hover:bg-green-500 py-1.5 w-[100px] rounded-lg">Add</button>
            </section>
        </form>
    </section>
    </div>
</template>