<template>
    <div class="border-t border-gray-200 dark:border-gray-600">
        <dl class="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
            <div class="flex flex-col justify-center items-center shadow-xl rounded-lg p-8" v-for="book in favorites" :key="book._version_">
                <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://madeinafricab2b.com/wp-content/uploads/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg" alt="Bonnie image"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ book.title }}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ book.first_publish_year }}</span>
                <p v-for="(author, index) in book.author_name" :key="index">{{ author}}</p>
            </div>               
        </dl>
    </div>
</template>

<script src="./favorite.js"></script>
<style src="./favorite.css"></style>
