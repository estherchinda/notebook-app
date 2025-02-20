<template>
    <div class="flex flex-col justify-center items-center">
        <div class="flex flex-col justify-center items-center h-[500px] space-y-10">
            <div>
                <i class="pi pi-trash text-green-800 text-5xl sm:text-8xl"></i>
            </div>
            <h2 class="text-xl font-semibold text-green-600">Uh oh! You have nothing in your trash yet.</h2>
            <RouterLink to="/" class="underline text-green-800 hover:text-green-900">Back to home</RouterLink>
        </div>
    </div>
</template>