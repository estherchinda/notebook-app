<script setup>
import axios from 'axios';
import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

const route = useRoute();
const router = useRouter();
const toast = useToast();


const state = reactive({
    note: [],
    popUp: false,
    isDeleted: false,
});

onMounted(async () => {
    try {
        const res = await axios.get(`/api/notes/${route.params.id}`);
        state.note = res.data
    } catch (error) {
        console.error('Error getting note', error)
    }
});

const assistDeleteTaskFunction = () => {
    state.popUp = true;
    console.log('pop up open');
}

const deleteTask = async () => {
    try {
        const res = await axios.delete(`/api/notes/${route.params.id}`);
        state.note = res.data
        router.push('/');
        toast.success('Note Deleted Successfully');
    } catch (error) {
        console.error('Error Deleting Note', error);
        toast.error('Error Deleting Note.')
    }
}
</script>

<template>
    <div class="flex flex-col items-center bg-green-200 h-screen">

        <!-- NOTE PAD -->
        <section class="bg-white rounded-lg h-[480px] w-[70%] mt-[30px] border border-black">
            <!-- TITLE BAR -->
            <div class="capitalize bg-green-300 border-b border-black text-center text-lg rounded-t-lg flex justify-between items-center py-1 px-[20px]">
                <div class="flex items-center text-green-800">
                    <RouterLink to="/">
                        <i class="pi pi-arrow-circle-left"></i>
                    </RouterLink>
                </div>
                <h2 class="capitalize text-green-900">{{ state.note.title }}</h2>
                <div class="flex items-center gap-3">
                    <RouterLink :to="`/edit/${state.note.id}`">
                        <i class="pi pi-pencil text-green-800 hover:cursor-pointer" title="Edit"></i>
                    </RouterLink>
                    <button @click="assistDeleteTaskFunction">
                        <i class="pi pi-trash text-red-500 hover:cursor-pointer" title="Delete"></i>
                    </button>
                </div>
            </div>
            <p class="m-4 text-gray-500">{{ state.note.content }}</p>
        </section>

        <!-- POP UP MESSAGE -->
        <section v-show="state.popUp" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className='bg-white p-5 rounded shadow-lg h-[130px] w-[260px]'>
                <h3 class="text-center">Delete Note?</h3>
                <!-- ADD AND CANCEL BTNS -->
                <section class="flex items-center justify-between w-full mt-[20px] text-white">
                    <button 
                    @click="state.popUp = false"
                    class="bg-red-600 hover:bg-red-500 py-1.5 w-[100px] rounded-lg active:scale-110">Cancel</button>
                    <button 
                    type="submit"
                    @click="deleteTask" 
                    class="bg-green-600 hover:bg-green-500 py-1.5 w-[100px] rounded-lg active:scale-110">Delete</button>
                </section>
            </div>
        </section>
    </div>
</template>
