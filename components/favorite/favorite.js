export default {
    computed: {
        favorites() {
            return this.$store.getters['getBooksFavorites']
        }
    }
}