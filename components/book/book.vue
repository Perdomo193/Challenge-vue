<template>
    <div class="flex justify-center">
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg" src="https://madeinafricab2b.com/wp-content/uploads/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg" alt="" />
            <div class="p-5">
                <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ book.title }}</h4>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Año
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {{ book.first_publish_year }}
                </p>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Autores</h5>
                <p v-for="author in book.author_name" :key="author" class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {{ author }}
                </p>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Idioma</h5>
                <p v-for="language in book.language" :key="language" class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {{ language }}
                </p>
            </div>
        </div>
    </div>
</template>

<script src="./book.js"></script>