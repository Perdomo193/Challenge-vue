export default {
    computed: {
        allBooks() {
            return this.$store.getters['getBooks']
        }
    },
    methods: {
        addFavorite(value) {
            this.$store.dispatch('addFavorite', {
                book: value,
            });
        },
        viewBook(value) {
            this.$store.dispatch('viewBook', {
                book: value
            })
            window.location.pathname = '/book'
        }
    }
}